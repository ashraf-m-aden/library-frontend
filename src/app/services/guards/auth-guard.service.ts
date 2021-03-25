import { catchError } from 'rxjs/operators';
import { AuthService } from './../auth.service';
import { Router, CanActivate, CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, HttpInterceptor {
  toasterService: any;

  constructor(private authS: AuthService, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url !== (environment.apiUrl + '/authenticate')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
    }

    return next.handle(request);
  }

  canActivate(): boolean {
    this.authS.isAuth.subscribe(auth => {
      if (!auth) {
        this.router.navigate(['/login']);
        return false;
      }
    });
    return true;
  }

  tap(arg0: (evt: any) => void): import('rxjs').OperatorFunction<HttpEvent<any>, unknown> {
  throw new Error('Function not implemented.');
}

}

