import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSetting } from '../const/appSetting';
import { UserSaveRequest, UserLoginResponse, LoginRequest } from '../models/user';

const headers = new HttpHeaders({ 'Content-Type': 'application/json' })

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseEndpoint = AppSetting.BASE_ENDPOINT;

  constructor(private http: HttpClient) { }

  login(credentials: LoginRequest): Observable<HttpResponse<UserLoginResponse>> {
    return this.http.post<UserLoginResponse>(`${this.baseEndpoint}/authenticate`, {
      username : credentials.username,
      password: credentials.password
     }, { headers: headers, observe: 'response' } );
  }

  register(user: UserSaveRequest) : Observable<any> {
    return this.http.post(`${this.baseEndpoint}/users`,
    user, { headers: headers })
  }

}
