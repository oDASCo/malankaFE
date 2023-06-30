import {Component, Input, OnInit} from '@angular/core';
import {CatalogService} from "../../services/catalog.service";
import {BASE_URL} from "../../../shared/utils";
import {ICatalogItem, ICatalogItems, IElement, IElements} from "../../../shared/interfaces/interface";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-catalog-block',
  templateUrl: './catalog-block.component.html',
  styleUrls: ['./catalog-block.component.scss']
})
export class CatalogBlockComponent implements OnInit {

  @Input() items = [] as IElements | ICatalogItems;
  allItems = this.items;
  filters = false;
  user: any;

  filtersForm = new FormGroup({
    category: new FormControl(''),
    level: new FormControl(''),
    search: new FormControl('')
  });

  constructor(public catalogService:  CatalogService) {

  }

  ngOnInit(): void {
    console.log(this.items);

  }


  filterElements() {

    let searchStr = this.filtersForm.value.search || '';
    if (this.filtersForm.value.search == '') {
      this.items = this.allItems;
    } else {
      this.items = this.items.filter(item => item.name.trim().toLocaleLowerCase().includes(searchStr.trim().toLocaleLowerCase()));
    }

  }

  filterCatalog() {

    let params = new HttpParams();
    if (this.filtersForm.value.level) {
      params = params.append("level", this.filtersForm.value.level);
    }
    if (this.filtersForm.value.category) {
      params = params.append("category", this.filtersForm.value.category);
    }
    this.user = JSON.parse(<string>window.localStorage.getItem('userInfo'));
    let paramsId = new HttpParams();
    params = params.append("userId", this.user.id);
    this.catalogService.getMyElements(paramsId).subscribe(myElements => {
      this.catalogService.getCatalogItems(params).subscribe((data: ICatalogItems) => {
        this.items = data;
        this.items.map((item: ICatalogItem) => {
          item.photo = BASE_URL + item.photo;
          item.video = BASE_URL + item.video;
          item.learnt = !myElements.find((it: any) => it.catalogElementId == item.id);
        });

      });
    });


  }

  addToMyElements(item: ICatalogItem) {
    let user = JSON.parse(<string>window.localStorage.getItem('userInfo'));
    this.catalogService.addToMyElements({...item, catalogElementId: item.id, userId: user.id, learnDate: Date.now().toString()}).subscribe((data) => {
    });
  }

  addToWishlist(item: ICatalogItem) {
    let user = JSON.parse(<string>window.localStorage.getItem('userInfo'));
    this.catalogService.addToWishlist({...item, catalogElementId: item.id, userId: user.id}).subscribe((data) => {
    });
  }

  addComboElement(item: ICatalogItem) {
    this.catalogService.addComboElement$.next(item);
    this.catalogService.addClassElement$.next(item);
  }

  addClassElement(item: ICatalogItem) {
    this.catalogService.addClassElement$.next(item);
  }

  showFilters() {
    this.filters = !this.filters;
  }

}
