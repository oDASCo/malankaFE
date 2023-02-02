import { Component, OnInit } from '@angular/core';
import {SidebarService} from "../../shared/sidebar.service";
import {CatalogService} from "../services/catalog.service";
import {ICatalogItems, ICombo, ICombos, IElements} from "../../shared/interfaces/interface";

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss']
})
export class CabinetComponent implements OnInit {

  isMenuOpened = false;
  myElements = [] as IElements;
  myCombos = [] as ICombos;
  myWishlist = [] as IElements;

  constructor(public sidebarService: SidebarService,
              public catalogService:  CatalogService) { }

  ngOnInit(): void {
    this.sidebarService.isMenuOpened.subscribe(val => {
      this.isMenuOpened = val;
    });
    this.catalogService.getMyElements().subscribe(data => {
      this.myElements = data;
    });

    this.catalogService.getWishlist().subscribe(data => {
      this.myWishlist = data;
    });

    this.catalogService.getMyCombos().subscribe(data => {
      this.myCombos = data;
    });
  }


  openMenu() {
    this.sidebarService.isMenuOpened.next(true);
  }

}
