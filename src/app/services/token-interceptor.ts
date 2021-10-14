import {Inject, Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {BASE_URL_TOKEN} from "../token";
import {Observable} from "rxjs";
import {UsersService} from "./users.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor{

  constructor(@Inject(BASE_URL_TOKEN) private baseUrl: string, private injector: Injector) {
  }

  isAddFileRequest(urlToCheck: string): boolean {
    const reg = /^.*\/\d+$/;
    const urlPart = '/admin/firmware/';
    return urlToCheck.indexOf(urlPart) > -1 && reg.test(urlToCheck);
  }

  isAddFileRequestInstruction(urlToCheck: string): boolean {
    const reg = /^.*\/\d+$/;
    const urlPart = '/admin/instruction/';
    return urlToCheck.indexOf(urlPart) > -1 && reg.test(urlToCheck);
  }

  isAddFileRequestMsg(urlToCheck: string): boolean {
    const urlPart = '/conversation/msg/';
    return urlToCheck.indexOf(urlPart) > -1;
  }

  isAddFileRequestAdminMsg(urlToCheck: string): boolean {
    const regExp = /^.+\/\d+\/\w+$/;
    const urlStart = '/admin/msg/';
    const urlEnd = '/attachment';
    return urlToCheck.indexOf(urlStart) > -1 && urlToCheck.indexOf(urlEnd) > -1 && regExp.test(urlToCheck);
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.url === `${this.baseUrl}/common/register/user` || request.url === `${this.baseUrl}/common/signin`) {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json;charset=utf-8',
          'Access-Control-Allow-Origin': '*'
        }
      });
      return next.handle(request);
    }
    const userService = this.injector.get(UsersService);
    const token = userService.getToken();

    if (token && (
      (request.method === 'POST' && this.isAddFileRequest(request.url) ) ||
      ((request.method === 'POST' && this.isAddFileRequestMsg(request.url))) ||
      (request.method === 'POST' && this.isAddFileRequestInstruction(request.url) ) ||
      (request.method === 'POST' && this.isAddFileRequestAdminMsg(request.url) )
    )) {
      request = request.clone({
        setHeaders: {
          Authorization: token,
        }
      });
      return next.handle(request);
    }
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: token,
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json;charset=utf-8'
        }
      });
    }
    return next.handle(request);
  }
}
