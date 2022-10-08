import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule} from "./auth/auth.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CatalogComponent } from './main/catalog/catalog.component';
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import { CatalogItemComponent } from './main/catalog/catalog-item/catalog-item.component';
import { CatalogContainerComponent } from './main/catalog/catalog-container/catalog-container.component';
import { CabinetComponent } from './main/cabinet/cabinet.component';
import { CreateComboComponent } from './main/create-combo/create-combo.component';
import { CreateElementComponent } from './main/create-element/create-element.component';
import { CreateClassComponent } from './main/create-class/create-class.component';
import { MyClassesComponent } from './main/my-classes/my-classes.component';
import { AddTrainerHoursComponent } from './main/add-trainer-hours/add-trainer-hours.component';
import { TrainersHoursComponent } from './main/trainers-hours/trainers-hours.component';
import { SettingsComponent } from './main/settings/settings.component';
import { ComboComponent } from './main/combo/combo.component';
import { CatalogBlockComponent } from './main/catalog-block/catalog-block.component';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    CatalogComponent,
    CatalogItemComponent,
    CatalogContainerComponent,
    CabinetComponent,
    CreateComboComponent,
    CreateElementComponent,
    CreateClassComponent,
    MyClassesComponent,
    AddTrainerHoursComponent,
    TrainersHoursComponent,
    SettingsComponent,
    ComboComponent,
    CatalogBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
