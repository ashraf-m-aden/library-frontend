import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  user: Observable<any>;
  options: {
    headers?: HttpHeaders | { [header: string]: string | string[] },
    observe?: 'body' | 'events' | 'response',
    params?: HttpParams | { [param: string]: string | string[] },
    reportProgress?: boolean,
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text',
    withCredentials?: boolean,
  };
  picId;
  constructor(
    private http: HttpClient) {
  }
  getClients() {
    return this.http.get(environment.apiUrl + '/clients');
  }
  getClient(idUser) {

    return this.http.get(environment.apiUrl + '/clients/' + idUser);

  }

  // upload(event, id) {
  //   return null;
  // }
  addClient(client) {

    return this.http.post(environment.apiUrl + '/clients', client);
  }
  getAllmyBooks(idUser) {
    return this.http.get(environment.apiUrl + '/borrows/client/' + 6);
  }
}
