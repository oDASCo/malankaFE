import { Component, OnInit } from '@angular/core';
import {SidebarService} from "../../../shared/sidebar.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ICatalogItem, ICatalogItems} from "../../../shared/interfaces/interface";
import {CatalogService} from "../../services/catalog.service";
import {BASE_URL} from "../../../shared/utils";

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss']
})
export class CatalogItemComponent implements OnInit {

  isMenuOpened = false;
  item = {} as ICatalogItem;

  constructor(public sidebarService: SidebarService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              public catalogService:  CatalogService) { }

  ngOnInit(): void {
    this.sidebarService.isMenuOpened.subscribe(val => {
      this.isMenuOpened = val;
    });
    this.activatedRoute.url.subscribe((val) => {
      this.catalogService.getCatalogItem(val[0].path).subscribe((item: ICatalogItem) => {
        this.item = {...item,
          photo: BASE_URL + item.photo,
          video: BASE_URL + item.video};
      });
    });
  }
  openMenu() {
    this.sidebarService.isMenuOpened.next(true);
  }

}
