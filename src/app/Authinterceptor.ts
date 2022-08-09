import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { Observable } from 'rxjs';
import { TokenService } from "./Token.service";

@Injectable()
export class Authinterceptor implements HttpInterceptor{

    constructor(private token: TokenService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req.clone({setHeaders:{Authorization: this.token.getToken()}}))
    }
}