import { AuthService } from '../auth.service';
import { Router, CanActivate, CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardDeconnectedService implements CanActivate, HttpInterceptor {

  constructor(private authS: AuthService, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log(environment.apiUrl + '/authenticate');

    if (request.url !== (environment.apiUrl + '/authenticate')) {
      console.log(request.url);

      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json; charset=utf-8',
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
    }


    return next.handle(request);
  }

  canActivate(): any {
    let state = true;
    this.authS.isAuth.subscribe(auth => {
      if (auth) {
        state = false;
      } else {
        state = true;
      }
    });
    return state;
  }
}
