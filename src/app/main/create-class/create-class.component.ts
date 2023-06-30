import { Component, OnInit } from '@angular/core';
import {SidebarService} from "../../shared/sidebar.service";
import {ICatalogItem, ICatalogItems} from "../../shared/interfaces/interface";
import {BASE_URL} from "../../shared/utils";
import {CatalogService} from "../services/catalog.service";
import {FormControl} from "@angular/forms";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.scss']
})
export class CreateClassComponent implements OnInit {

  isMenuOpened = false;
  items = [] as ICatalogItems;
  elementsInClass = [] as ICatalogItems;
  className = new FormControl('');
  user: any;

  constructor(public sidebarService: SidebarService,
              public catalogService:  CatalogService) { }

  ngOnInit(): void {
    this.sidebarService.isMenuOpened.subscribe(val => {
      this.isMenuOpened = val;
    });
    this.user = JSON.parse(<string>window.localStorage.getItem('userInfo'));
    let params = new HttpParams();
    params = params.append("userId", this.user.id);
    this.catalogService.getMyElements(params).subscribe(data => {
      this.items = data;
    });

    this.catalogService.addClassElement$.subscribe(item => {
      this.addToClass(item);
    });
  }

  addToClass(element: ICatalogItem) {
    // @ts-ignore
    if (Object.keys(element).length !== 0) {
      this.elementsInClass.push(element);
    }

  }

  openMenu() {
    this.sidebarService.isMenuOpened.next(true);
  }

  addCombo() {
    if (this.elementsInClass.length !== 0) {
      const dataToSend = {
        userId: this.elementsInClass[0] ? this.elementsInClass[0].userId : '',
        name: this.className.value,
        elements: this.elementsInClass.map(i => {return {name: i.name, id: i.id}}),
        category: this.elementsInClass[0].category
      };
      this.catalogService.addClass(dataToSend).subscribe(data => {
        console.log(data);
      });
    }


  }

}
