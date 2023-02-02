import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import {RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import { HeaderComponent } from './header/header.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./services/auth.service";



@NgModule({
  declarations: [
    AuthComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HeaderComponent,
  ],
  exports: [
    AuthComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  providers: [AuthService]
})
export class AuthModule { }
