import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSetting } from '../const/appSetting';
import { CustomerGetResponse, CustomerSaveRequest, CustomerSaveResponse } from '../models/customers';
import { DeleteResponse } from '../models/generic';
import HttpHeadersUtil from '../models/httpHeadersUtil';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  protected baseEndpoint = `${AppSetting.BASE_ENDPOINT }/customers`;
  protected headers = HttpHeadersUtil.headers;

  constructor(protected http: HttpClient) { }

  public findAllPageable(page: string, size: string): Observable<any> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<any>(`${this.baseEndpoint}/pageable`, { params: params });
  }

  public findById(customerId: number): Observable<CustomerGetResponse> {
    return this.http.get<CustomerGetResponse>(`${this.baseEndpoint}/${customerId}`);
  }

  public create(customer: CustomerSaveRequest): Observable<CustomerSaveResponse> {
    return this.http.post<CustomerSaveResponse>(this.baseEndpoint, customer ,
        {headers : this.headers});
  }

  public update(customerId: number, customer: CustomerSaveRequest): Observable<CustomerSaveResponse> {
    return this.http.put<CustomerSaveResponse>(`${this.baseEndpoint}/${customerId}`, 
      customer, {headers : this.headers});
  }

  public delete(customerId: number) : Observable<DeleteResponse> {
    return this.http.delete<DeleteResponse>(`${this.baseEndpoint}/${customerId}`);
  }

}
