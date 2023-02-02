import { Component, OnInit } from '@angular/core';
import {SidebarService} from "../../shared/sidebar.service";

@Component({
  selector: 'app-trainers-hours',
  templateUrl: './trainers-hours.component.html',
  styleUrls: ['./trainers-hours.component.scss']
})
export class TrainersHoursComponent implements OnInit {

  isMenuOpened = false;

  constructor(public sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.sidebarService.isMenuOpened.subscribe(val => {
      this.isMenuOpened = val;
    })
  }
  openMenu() {
    this.sidebarService.isMenuOpened.next(true);
  }

}
