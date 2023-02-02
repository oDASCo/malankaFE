import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
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
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {SidebarService} from "./shared/sidebar.service";
import {ReactiveFormsModule} from "@angular/forms";
import {FileUploadComponent} from "./main/file-upload/file-upload.component";
import {CatalogService} from "./main/services/catalog.service";
import {CatalogBlockComponent} from "./main/catalog/catalog-block/catalog-block.component";
import { LandingComponent } from './landing/landing.component';
import {MatTabsModule} from "@angular/material/tabs";
import { SalesComponent } from './landing/sales/sales.component';
import { NgxSpinnerModule } from "ngx-spinner";
import {VgCoreModule} from "@videogular/ngx-videogular/core";
import {VgControlsModule} from "@videogular/ngx-videogular/controls";
import {VgOverlayPlayModule} from "@videogular/ngx-videogular/overlay-play";
import {VgBufferingModule} from "@videogular/ngx-videogular/buffering";

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
    CatalogBlockComponent,
    FileUploadComponent,
    LandingComponent,
    SalesComponent
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
    ReactiveFormsModule,
    MatTabsModule,
    NgxSpinnerModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })


  ],
// {provide: LocationStrategy, useClass: HashLocationStrategy}
  providers: [SidebarService, CatalogService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
