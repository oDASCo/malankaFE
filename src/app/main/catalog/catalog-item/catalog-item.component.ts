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
  videoMode = false;

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
        console.log(item);
        this.item = {...item,
          desc: item.desc[0].split(','),
          photo: BASE_URL + item.photo,
          video: BASE_URL + item.video};
      });
    });
  }
  openMenu() {
    this.sidebarService.isMenuOpened.next(true);
  }

  goToVideo() {
    this.videoMode = !this.videoMode;
    this.catalogService.videoSlide$.next(true);
  }

}
