import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppSetting } from '../const/appSetting';
import { ExchangeRateGetRequest, ExchangeRateGetResponse, ExchangeRateAllResponse, ExchangeRateUpdateRequest, ExchangeRate } from '../models/exchange';
import HttpHeadersUtil from '../models/httpHeadersUtil';

@Injectable({
    providedIn: 'root'
})
export class ExchangeService {

    protected baseEndpoint = `${AppSetting.BASE_ENDPOINT}/exchange`;
    protected headers = HttpHeadersUtil.headers;

    constructor(protected http: HttpClient) { }

    public exchange(request: ExchangeRateGetRequest) : Observable<ExchangeRateGetResponse>  {
        return this.http.post<ExchangeRateGetResponse>(`${this.baseEndpoint}`, request, {headers : this.headers}).pipe(
            map((data: ExchangeRateGetResponse) => data));
    }

    public updateExchange(request: ExchangeRateUpdateRequest) : Observable<ExchangeRateUpdateRequest> {
        return this.http.put<ExchangeRateUpdateRequest>(`${this.baseEndpoint}`, request, {headers : this.headers});
    }

    public findAll() : Observable<ExchangeRateAllResponse[]> {
        return this.http.get<ExchangeRateAllResponse[]>(`${this.baseEndpoint}`);
    }

    public findById(id: number): Observable<ExchangeRate> {
        return this.http.get<ExchangeRate>(`${this.baseEndpoint}/${id}`);
      }

}