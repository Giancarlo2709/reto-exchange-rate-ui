import { Injectable } from '@angular/core';
import { AppSetting } from '../const/appSetting';
import { UserLoginResponse } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  private tokenKey = AppSetting.TOKEN_KEY;
  private userKey = AppSetting.USER_KEY;

  constructor() { }

  signOut() : void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) : void {    
    window.sessionStorage.removeItem(this.tokenKey);
    window.sessionStorage.setItem(this.tokenKey, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(this.tokenKey);
  }

  public saveUser(user): void {
    window.sessionStorage.removeItem(this.userKey);
    window.sessionStorage.setItem(this.userKey, JSON.stringify(user));
  }

  public getUser(): UserLoginResponse {
    return JSON.parse(sessionStorage.getItem(this.userKey));
  }

}
