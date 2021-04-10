import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers;
  public isAuth: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public error: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public staff: BehaviorSubject<any> = new BehaviorSubject<any>({});
  public isSuperviseur = false;
  public hasPower = false;
  public isAgent = false;
  public isVisiteur = false;

  constructor(private http: HttpClient, private router: Router) { }
  setHeader() {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json')
      .set('X-Requested-Width', 'XMLHttpRequest').set('Authorization', 'Bearer ' + localStorage.getItem('token'));
  }
  Authenticated() {
    if (localStorage.getItem('id') && localStorage.getItem('token')) {
      this.isAuth.next(true);
    } else {
      this.isAuth.next(false);
    }
    return this.isAuth.asObservable();

  }

  // SetStaffType(id) {
  //   switch (id) {
  //     case '5f2005ac07a53d4f38f95e08':
  //       this.isSuperviseur = true;
  //       break;
  //     case '5f3b678b01539006e48af129':
  //       this.isAgent = true;
  //       break;
  //     case '5f3b67fc01539006e48af12a':
  //       this.hasPower = true;
  //       break;
  //     case '5f3b685201539006e48af12b':
  //       this.isVisiteur = true;
  //       break;
  //   }
  // }
  canActivate(): boolean {
    let state = false;

    this.Authenticated().subscribe(data => {
      state = data;
    });
    if (state) {
      this.router.navigate(['/dashboard']);
      return false;
    }
    return true;
  }
  getStaff() {
    const staff = { username: localStorage.getItem('username'), id: localStorage.getItem('id') };
    this.staff.next(staff);
    return this.staff.asObservable();
  }
  login(username, password) {
    const body = { username, password };
    return this.http.post(environment.apiUrl + '/authenticate', body).subscribe(async (data: any) => {
      await localStorage.setItem('token', data.jwt);

      //then get the id of the user

      return this.http.get(environment.apiUrl + '/user', this.headers).subscribe(async (data: any) => {
        console.log(data);

        await localStorage.setItem('id', data.id);
        await localStorage.setItem('username', data.username);

        this.error.next('');
        this.staff.next(data);
        await this.Authenticated();
        await this.router.navigate(['/dashboard']);


      });

    }, (error) => {
      this.error.next(error.status);
    });
  }
  erroLogout(): Observable<any> {
    return this.error.asObservable();

  }
  logout() {
    localStorage.clear();
    this.Authenticated();
    this.isAgent = false;
    this.hasPower = false;
    this.isVisiteur = false;
    this.isSuperviseur = false;
    this.router.navigate(['/login']);
  }

  checkAuthError(error) {
    if (error.status === 403 || error.status === 401) {
      this.logout();
    }
  }
}
