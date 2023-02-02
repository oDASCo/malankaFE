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
  //items = [] as ICatalogItems;

  filtersForm = new FormGroup({
    category: new FormControl(''),
    level: new FormControl('')
  });

  constructor(public catalogService:  CatalogService) { }

  ngOnInit(): void {

  }

  filterCatalog() {
    console.log(this.filtersForm.value);

    let params = new HttpParams();
    if (this.filtersForm.value.level) {
      params = params.append("level", this.filtersForm.value.level);
    }
    if (this.filtersForm.value.category) {
      params = params.append("category", this.filtersForm.value.category);
    }

    this.catalogService.getMyElements().subscribe(myElements => {
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

}
