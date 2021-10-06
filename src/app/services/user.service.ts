import { Injectable } from '@angular/core';
import { AppSetting } from '../const/appSetting';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseEndpoint = AppSetting.BASE_ENDPOINT + '/users';

  constructor(private http: HttpClient) { }
  

}
