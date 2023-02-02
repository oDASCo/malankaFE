import { Component, OnInit } from '@angular/core';
import {SidebarService} from "../../shared/sidebar.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CatalogService} from "../services/catalog.service";
import {ICatalogItem, IUser} from "../../shared/interfaces/interface";
import {concatMap} from "rxjs/operators";
import {BASE_URL} from "../../shared/utils";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create-element',
  templateUrl: './create-element.component.html',
  styleUrls: ['./create-element.component.scss']
})
export class CreateElementComponent implements OnInit {

  createForm = new FormGroup({
    category: new FormControl(''),
    name: new FormControl(''),
    level: new FormControl(''),
    desc: new FormControl(''),
    image: new FormControl(null),
    video: new FormControl(null),
  });
  progress: any = 0;


  isMenuOpened = false;

  user: IUser;
  elementData: any;
  pathArr: string[] = [''];

  constructor(public sidebarService: SidebarService,
              public catalogService:  CatalogService,
              private activatedRoute: ActivatedRoute,
              private router: Router,) {
    this.user = JSON.parse(<string>window.localStorage.getItem('userInfo'));
  }

  ngOnInit(): void {
    this.sidebarService.isMenuOpened.subscribe(val => {
      this.isMenuOpened = val;
    });


    this.pathArr = this.router.routerState.snapshot.url.split('/');

    console.log(this.pathArr[1]);
    if (this.pathArr[1] === 'edit-element') {
      this.catalogService.getCatalogItem(this.pathArr[2]).subscribe((item: ICatalogItem) => {
        this.elementData = {...item,
          photo: BASE_URL + item.photo,
          video: BASE_URL + item.video};
        this.createForm.patchValue(this.elementData);
      });
    }

  }
  openMenu() {
    this.sidebarService.isMenuOpened.next(true);
  }


  createElement() {
    let elemData = {...this.createForm.value, video: null, createdBy: this.user.id, id: this.elementData.id ? this.elementData.id : null
    };
    let photoData = {file: this.createForm.value.image};
    let videoData = {file: this.createForm.value.video};

    if (this.pathArr[1] === 'edit-element') {
      this.catalogService.editCatalogElement(elemData).pipe(
        concatMap(result1 => this.catalogService.uploadCatalogPhoto(this.toFormData({...result1, ...photoData}))),
        concatMap( (result2) => this.catalogService.uploadCatalogVideo(this.toFormData({...result2, ...videoData}))),
      ).subscribe(
        success => {
          this.createForm.reset();
        },
        errorData => { /* display error msg */ }
      );
    } else {
      this.catalogService.createCatalogElement(elemData).pipe(
        concatMap(result1 => this.catalogService.uploadCatalogPhoto(this.toFormData({...result1, ...photoData}))),
        concatMap( (result2) => this.catalogService.uploadCatalogVideo(this.toFormData({...result2, ...videoData}))),
      ).subscribe(
        success => {
          this.createForm.reset();
        },
        errorData => { /* display error msg */ }
      );
    }




  }

  toFormData( formValue: any  ) {
    const formData = new FormData();

    for ( const key of Object.keys(formValue) ) {
      const value = formValue[key];
      formData.append(key, value);
    }

    return formData;
  }


}
