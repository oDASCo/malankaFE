import { Component, OnInit } from '@angular/core';
import {SidebarService} from "../../shared/sidebar.service";

@Component({
  selector: 'app-add-trainer-hours',
  templateUrl: './add-trainer-hours.component.html',
  styleUrls: ['./add-trainer-hours.component.scss']
})
export class AddTrainerHoursComponent implements OnInit {

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
