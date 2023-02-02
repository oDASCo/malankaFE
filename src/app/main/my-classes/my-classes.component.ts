import { Component, OnInit } from '@angular/core';
import {SidebarService} from "../../shared/sidebar.service";
import {ICatalogItem, ICatalogItems, IClasses} from "../../shared/interfaces/interface";
import {BASE_URL} from "../../shared/utils";
import {CatalogService} from "../services/catalog.service";

@Component({
  selector: 'app-my-classes',
  templateUrl: './my-classes.component.html',
  styleUrls: ['./my-classes.component.scss']
})
export class MyClassesComponent implements OnInit {

  isMenuOpened = false;
  items = [] as IClasses;

  constructor(public sidebarService: SidebarService,
              public catalogService:  CatalogService) { }

  ngOnInit(): void {
    this.sidebarService.isMenuOpened.subscribe(val => {
      this.isMenuOpened = val;
    });

    this.catalogService.getClasses().subscribe(data => {
      this.items = data;
    });
  }
  openMenu() {
    this.sidebarService.isMenuOpened.next(true);
  }

}
