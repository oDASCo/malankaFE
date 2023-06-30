import {Component, OnInit} from '@angular/core';
import {SidebarService} from "../../shared/sidebar.service";
import {BASE_URL} from "../../shared/utils";
import {CatalogService} from "../services/catalog.service";
import {ICatalogItem, ICatalogItems} from "../../shared/interfaces/interface";
import {AuthService} from "../../auth/services/auth.service";
import {ActivatedRoute} from "@angular/router";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isMenuOpened = false;
  items: ICatalogItem[] = [] as ICatalogItems;
  lastLearnt = [] as ICatalogItems;
  levelIntroCount = 0;
  level0Count = 0;
  level1Count = 0;
  level2Count = 0;
  user: any;

  allLevelIntroCount = 0;
  allLevel0Count = 0;
  allLevel1Count = 0;
  allLevel2Count = 0;

  constructor(public sidebarService: SidebarService,
              public catalogService:  CatalogService,
              private authService: AuthService,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.queryParams
      .subscribe((queryPar: any) => {
          console.log(queryPar);
          if (queryPar.username) {
            this.authService.getUserByUsername(queryPar.username, queryPar).subscribe(data => {
              window.localStorage.setItem('userInfo', JSON.stringify(data));
            });
          }

        }
      );




    this.sidebarService.isMenuOpened.subscribe(val => {
      this.isMenuOpened = val;
    });
    this.user = JSON.parse(<string>window.localStorage.getItem('userInfo'));
    let params = new HttpParams();
    params = params.append("userId", this.user.id);
    this.catalogService.getMyElements(params).subscribe(myElements => {
      myElements.sort((a: any, b: any) => +b.learnDate - +a.learnDate);
      this.lastLearnt = myElements.slice(0, 3);

      this.levelIntroCount = this.getLevelsCount(myElements, 'Level Intro');
      this.level0Count = this.getLevelsCount(myElements, 'Level 0');
      this.level1Count = this.getLevelsCount(myElements, 'Level 1');
      this.level2Count = this.getLevelsCount(myElements, 'Level 2');


      this.catalogService.getCatalogItems().subscribe((data: ICatalogItems) => {
        console.log(data);
        this.items = data;
        this.items.map((item: ICatalogItem) => {
          item.photo = BASE_URL + item.photo;
          item.video = BASE_URL + item.video;
          item.learnt = !myElements.find((it: any) => it.catalogElementId == item.id);
        });
        this.catalogService.catalog$.next(this.items);
        this.items = data.slice(0, 4);
        console.log(this.items);
        this.allLevelIntroCount = this.getLevelsCount(data, 'Level Intro');
        this.allLevel0Count = this.getLevelsCount(data, 'Level 0');
        this.allLevel1Count = this.getLevelsCount(data, 'Level 1');
        this.allLevel2Count = this.getLevelsCount(data, 'Level 2');

      });

    });
  }
  getLevelsCount(data: any, level: string) {
    return data.filter((item: any) => item.level === level).length ? data.filter((item: any) => item.level === level).length : 0;
  }

  openMenu() {
    this.sidebarService.isMenuOpened.next(true);
  }

}
