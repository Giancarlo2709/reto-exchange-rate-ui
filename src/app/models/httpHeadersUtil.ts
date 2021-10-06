import { HttpHeaders } from '@angular/common/http';

export default class HttpHeadersUtil {
    static headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
}