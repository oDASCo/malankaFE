import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {HttpParams} from "@angular/common/http";

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
    this.router.navigate([], {queryParams: {login: 'newlogin'}});
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

  loginWithGoogle() {
    let params = new HttpParams();
    params = params.append('client_id', '650568311361-r6dfdv19l7irbuneei74ekplhoienjum.apps.googleusercontent.com');
    // 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
    params = params.append('redirect_uri', 'http://localhost:4200/dashboard');
    params = params.append('response_type', 'token');
    params = params.append('scope', 'https://www.googleapis.com/auth/drive.metadata.readonly');
    params = params.append('include_granted_scopes', 'true');
    params = params.append('state', 'pass-through value');
    // this.authService.googleAuth(params).subscribe(data => {
    //   console.log(data);
    // });
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=650568311361-ecq49fiqfclgu2rjnu55ms9eb2b8gs9o.apps.googleusercontent.com&redirect_uri=https://localhost:4200/dashboard&response_type=token&scope=https://www.googleapis.com/auth/drive.metadata.readonly&include_granted_scopes=true&state=pass-through value`;
  }
}
