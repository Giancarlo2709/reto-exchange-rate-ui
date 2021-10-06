import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { HttpResponse } from '@angular/common/http';
import { UserLoginResponse, LoginRequest } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRequest: LoginRequest = new LoginRequest();
  isLoggedIn = false;
  errorMessage = '';
  roles: string[] = [];
  error: any;

  constructor(
    private router: Router,
    private authService: AuthService,
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  authenticate() : void {
    if (this.validateLogin()) {
      this.authService.login(this.loginRequest)
      .subscribe( (data: HttpResponse<UserLoginResponse>) => {
        const token = data.headers.get('authorization');
        
        this.tokenStorage.saveToken(token);
        this.tokenStorage.saveUser(data.body);

        this.isLoggedIn = true;
        this.reloadPage();
      }, e => {
        if(e.status === 401) {
          this.error = e;
        }

        if(e.status === 400) {  
          this.initializeError();

          e.error.errors.forEach(element => {
            if (element.code === 'username') {
              this.error.username = element.message;
            }

            if(element.code === 'password') {
              this.error.password = element.message;
            }
          });       
        }
      });
    }
    
  }

  reloadPage(): void {
    window.location.reload();
  }

  private initializeError() : void {
    this.error = { username: '', password: '', error: { message : '' } };
  }

  private validateLogin() : boolean {
    this.initializeError();
    let result = true;
    if(!(this.loginRequest.username && this.loginRequest.username.trim().length > 0)) {
      this.error.username = 'El campo usuario es requerido';
      result = false;
    }

    if(!(this.loginRequest.password && this.loginRequest.password.trim().length > 0)) {
      this.error.password = 'El campo password es requerido';
      result = false;
    }

    return result;
  }

  keyUpEnter() : void {
    this.authenticate();
  }

}
