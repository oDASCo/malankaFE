import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    repeatedPassword: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  constructor(private translate: TranslateService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  signUp() {
    if (!this.registerForm.invalid) {
      const userData = {
        ...this.registerForm.value,
        photo: "",
        role: 'user'
      };
      this.authService.createUser(userData).subscribe(data => {
        const loginObj = {
          username: data.username,
          password: this.registerForm.controls.password.value
        };
        this.authService.login(loginObj).subscribe(data => {
          window.localStorage.setItem('userInfo', JSON.stringify(data));
          this.authService.userInfo$.next(data);
          //this.authService.isLoggedIn = true;
          this.registerForm.reset();
          this.router.navigate(['/dashboard']);
        });
      }, error => {
        console.log(error);
        //this.showError(error.error);
      })
    } else {
      //this.showError('Заполните все обязательные поля');
    }
  }

}
