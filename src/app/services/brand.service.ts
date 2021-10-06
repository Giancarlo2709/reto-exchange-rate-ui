import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSetting } from '../const/appSetting';
import { Brand, BrandResponse, BrandGetPageableResponse } from '../models/brand';
import { DeleteResponse } from '../models/generic';
import HttpHeadersUtil from '../models/httpHeadersUtil';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  protected baseEndpoint = `${AppSetting.BASE_ENDPOINT }/brands`;
  protected headers = HttpHeadersUtil.headers;

  constructor(protected http: HttpClient) { }

  public findAllPageable(page: string, size: string): Observable<any> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<any>(`${this.baseEndpoint}/pageable`, { params: params });
  }

  public findById(brandId: number): Observable<BrandGetPageableResponse> {
    return this.http.get<BrandGetPageableResponse>(`${this.baseEndpoint}/${brandId}`);
  }

  public create(brand: Brand): Observable<BrandResponse> {
    return this.http.post<BrandResponse>(this.baseEndpoint, 
      this.convertObject(brand), {headers : this.headers});
  }

  public update(brand: Brand): Observable<BrandResponse> {
    return this.http.put<BrandResponse>(`${this.baseEndpoint}/${brand.brandId}`, 
      this.convertObject(brand), {headers : this.headers});
  }

  public delete(brandId: number) : Observable<DeleteResponse> {
    return this.http.delete<DeleteResponse>(`${this.baseEndpoint}/${brandId}`);
  }

  public convertObject(brand: Brand) : any {
    return { description: brand.description };
  }
}
