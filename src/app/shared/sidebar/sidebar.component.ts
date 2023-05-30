import {Component, NgZone, OnInit} from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";
import {Router} from "@angular/router";
import {SidebarService} from "../sidebar.service";
import {IUser} from "../interfaces/interface";
import {BASE_URL} from "../utils";
import { StatusBar, Style } from '@capacitor/status-bar';

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
              private sidebarService: SidebarService,
              private ngZone: NgZone) {
    this.user = JSON.parse(<string>window.localStorage.getItem('userInfo')) ? JSON.parse(<string>window.localStorage.getItem('userInfo')) : null;
    if (this.user) {
      this.user.photo = this.user ? BASE_URL + this.user.photo : '';
      this.userImg = `url(${this.user.photo})`;
      console.log(this.userImg);
    }

  }


  async ngOnInit() {
    this.ngZone.run(() => {
        // This code will run in Angular's execution context
        StatusBar.setOverlaysWebView({ overlay: true });
      });
  }


  logout() {
    window.localStorage.removeItem('userInfo');
    this.router.navigate(['/login']);
  }

  closeMenu() {
    this.sidebarService.isMenuOpened.next(false);
  }

}
