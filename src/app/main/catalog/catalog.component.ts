import { Component, OnInit } from '@angular/core';
import {SidebarService} from "../../shared/sidebar.service";
import {ICatalogItem, ICatalogItems} from "../../shared/interfaces/interface";
import {BASE_URL} from "../../shared/utils";
import {CatalogService} from "../services/catalog.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  isMenuOpened = false;
  items = [] as ICatalogItems;

  constructor(public sidebarService: SidebarService,
              public catalogService:  CatalogService) { }

  ngOnInit(): void {
    this.sidebarService.isMenuOpened.subscribe(val => {
      this.isMenuOpened = val;
    });
    this.catalogService.catalog$.subscribe((data: ICatalogItems) => {
      if (data.length !== 0) {
        this.items = data;
      } else {



        this.catalogService.getMyElements().subscribe(myElements => {
          this.catalogService.getCatalogItems().subscribe((data: ICatalogItems) => {
            this.items = data;
            this.items.map((item: ICatalogItem) => {
              item.photo = BASE_URL + item.photo;
              item.video = BASE_URL + item.video;
              item.learnt = !myElements.find((it: any) => it.catalogElementId == item.id);
            });

            this.catalogService.catalog$.next(this.items);
          });
        });

      }

    });
  }
  openMenu() {
    this.sidebarService.isMenuOpened.next(true);
  }

}
