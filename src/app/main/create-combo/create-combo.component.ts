import { Component, OnInit } from '@angular/core';
import {SidebarService} from "../../shared/sidebar.service";
import {CatalogService} from "../services/catalog.service";
import {ICatalogItem, ICatalogItems, IElement, IElements} from "../../shared/interfaces/interface";
import {FormControlName} from "@angular/forms";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-combo',
  templateUrl: './create-combo.component.html',
  styleUrls: ['./create-combo.component.scss']
})
export class CreateComboComponent implements OnInit {

  isMenuOpened = false;
  myElements = [] as IElements;
  elementsInCombo = [] as ICatalogItems;

  comboName = new FormControl('');

  constructor(public sidebarService: SidebarService,
              public catalogService:  CatalogService) { }

  ngOnInit(): void {
    this.sidebarService.isMenuOpened.subscribe(val => {
      this.isMenuOpened = val;
    });
    this.catalogService.getMyElements().subscribe(data => {
      this.myElements = data;
    });
    this.catalogService.addComboElement$.subscribe(item => {
      this.addToCombo(item);
    });
  }
  openMenu() {
    this.sidebarService.isMenuOpened.next(true);
  }

  addToCombo(element: ICatalogItem) {
    console.log(element);
    // @ts-ignore
    if (Object.keys(element).length !== 0) {
      this.elementsInCombo.push(element);
    }

  }

  addCombo() {
    if (this.elementsInCombo.length !== 0) {
      const dataToSend = {
        userId: this.elementsInCombo[0] ? this.elementsInCombo[0].userId : '',
        name: this.comboName.value,
        elements: this.elementsInCombo.map(i => i.id),
        category: this.elementsInCombo[0].category
      };
      this.catalogService.addCombo(dataToSend).subscribe(data => {
        console.log(data);
      });
    }


  }

}
