import { Component, OnInit } from '@angular/core';
import {SidebarService} from "../../shared/sidebar.service";
import {FormControl, FormGroup} from "@angular/forms";
import {CatalogService} from "../services/catalog.service";
import {IUser} from "../../shared/interfaces/interface";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  userForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    photo: new FormControl(null)
  });

  isMenuOpened = false;
  user: IUser;

  constructor(public sidebarService: SidebarService,
              public catalogService:  CatalogService) {
    this.user = JSON.parse(<string>window.localStorage.getItem('userInfo'));
  }

  ngOnInit(): void {
    this.sidebarService.isMenuOpened.subscribe(val => {
      this.isMenuOpened = val;
    });
    this.userForm.patchValue({
      username: this.user.username,
      email: this.user.email,
    });
  }
  openMenu() {
    this.sidebarService.isMenuOpened.next(true);
  }

  updateUser() {
    let elemData = {username: this.userForm.value.username, email: this.userForm.value.email, id: this.user.id, role: this.user.role};
    let photoData = {file: this.userForm.value.photo};

    this.catalogService.updateUser(this.user.id, elemData).subscribe((data) => {
      if (data) {
        this.catalogService.uploadUserPhoto(this.user.id, this.toFormData(photoData)).subscribe((data) => {
          window.localStorage.setItem('userInfo', JSON.stringify(data));
          this.userForm.reset();
        });
      }

    });
  }

  toFormData( formValue: any  ) {
    const formData = new FormData();

    for ( const key of Object.keys(formValue) ) {
      const value = formValue[key];
      console.log(value);
      formData.append(key, value);
    }

    return formData;
  }

}
