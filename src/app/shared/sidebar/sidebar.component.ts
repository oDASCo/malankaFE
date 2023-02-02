import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";
import {Router} from "@angular/router";
import {SidebarService} from "../sidebar.service";
import {IUser} from "../interfaces/interface";
import {BASE_URL} from "../utils";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  user: IUser;
  userImg = '';

  constructor(private authService: AuthService,
              private router: Router,
              private sidebarService: SidebarService) {
    this.user = JSON.parse(<string>window.localStorage.getItem('userInfo'));
    this.user.photo = BASE_URL + this.user.photo;
    this.userImg = `url(${this.user.photo})`;
    console.log(this.userImg);
  }

  ngOnInit(): void {
  }

  logout() {
    window.localStorage.removeItem('userInfo');
    this.router.navigate(['/login']);
  }

  closeMenu() {
    this.sidebarService.isMenuOpened.next(false);
  }

}
