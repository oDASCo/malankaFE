import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthModule} from "./auth/auth.module";
import {LoginPageComponent} from "./auth/login-page/login-page.component";
import {RegisterPageComponent} from "./auth/register-page/register-page.component";
import {DashboardComponent} from "./main/dashboard/dashboard.component";
import {CatalogComponent} from "./main/catalog/catalog.component";
import {CatalogItemComponent} from "./main/catalog/catalog-item/catalog-item.component";
import {CatalogContainerComponent} from "./main/catalog/catalog-container/catalog-container.component";
import {CabinetComponent} from "./main/cabinet/cabinet.component";
import {CreateComboComponent} from "./main/create-combo/create-combo.component";
import {CreateElementComponent} from "./main/create-element/create-element.component";
import {CreateClassComponent} from "./main/create-class/create-class.component";
import {MyClassesComponent} from "./main/my-classes/my-classes.component";
import {AddTrainerHoursComponent} from "./main/add-trainer-hours/add-trainer-hours.component";
import {TrainersHoursComponent} from "./main/trainers-hours/trainers-hours.component";
import {SettingsComponent} from "./main/settings/settings.component";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'cabinet', component: CabinetComponent},
  {path: 'create-combo', component: CreateComboComponent},
  {path: 'create-element', component: CreateElementComponent},
  {path: 'create-class', component: CreateClassComponent},
  {path: 'my-classes', component: MyClassesComponent},
  {path: 'add-hours', component: AddTrainerHoursComponent},
  {path: 'hours', component: TrainersHoursComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'catalog', component: CatalogContainerComponent, children: [
      {path: '', component: CatalogComponent},
      {path: ':item', component: CatalogItemComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
