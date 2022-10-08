import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  constructor(private translate: TranslateService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {

  }

  showError(message: any) {
    // this._snackBar.open(message, 'OK', {
    //   duration: 5000
    // });
  }

  login() {
    if (!this.loginForm.invalid) {
      this.authService.login(this.loginForm.value).subscribe(data => {
        window.localStorage.setItem('userInfo', JSON.stringify(data));
        this.authService.userInfo$.next(data);
        //this.authService.isLoggedIn = true;
        this.loginForm.reset();
        this.router.navigate(['/dashboard']);
      }, error => this.showError('Неправильный логин или пароль'))
    } else {
      this.showError('Заполните все обязательные поля');
    }
  }

}
