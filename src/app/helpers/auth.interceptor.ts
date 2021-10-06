import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS, HttpResponse } from "@angular/common/http";
import { TokenStorageService } from "../services/token-storage.service";
import { Observable } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { AppSetting } from "../const/appSetting";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private tokenHeaderKey = AppSetting.TOKEN_HEADER_KEY;

  constructor(private token: TokenStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.token.getToken();

    if (token != null) {
      authReq = req.clone( { headers: req.headers.set(this.tokenHeaderKey, `${token}`)})
    }

    return next.handle(authReq).pipe(
      tap(evt => {
        if (evt instanceof HttpResponse && evt.headers.get('authorization')) {
          let tokenNew = evt.headers.get('authorization');
          this.token.saveToken(tokenNew);
        }
        return evt;
      })
    );
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
];