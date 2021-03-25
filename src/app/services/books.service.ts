import { Injectable } from '@angular/core';
import 'firebase/firestore';
import 'firebase/storage';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private bookCollection: AngularFirestoreCollection;
  private genreCollection: AngularFirestoreCollection;
  private pretCollection: AngularFirestoreCollection;
  book: Observable<any>;
  picId;
  options: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    observe?: 'body' | 'events' | 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
  };

  constructor(
    private afs: AngularFirestore,
    private afStorage: AngularFireStorage,
    private http: HttpClient
  ) {
    this.bookCollection = afs.collection('Books');
    this.book = this.bookCollection.valueChanges();
  }
  getGenres() {
    return this.http.get(environment.apiUrl +'/genres');

  }
  deleteGenre(id) {
    return this.http.delete(environment.apiUrl +'/genres/' + id);

  }
  addGenre(genre) {
    return this.http.post<any>(environment.apiUrl +'/genres', genre);

  }
  getBooksByGenre(id) {
    return this.http.get(environment.apiUrl +'/books/genre/' + id);

  }
  getBooks() {
    return this.http.get(environment.apiUrl +'/books');

  }
  getBook(idbook) {
    // getOne Books
    return this.http.get(environment.apiUrl +'/books/' + idbook);

  }

  delete(idbook) {
    // getOne Books
    return this.http.delete(environment.apiUrl + '/books/' + idbook);

  }

  upload(event, id) {
    const path = `${id}`;
    return this.afStorage.ref(path).put(event);
  }
  addBook(book, id) {

    return this.http.post(environment.apiUrl +'/books/' + id , book);

  }
  borrowBook(pret) {
    return this.http.post(environment.apiUrl + '/borrows/', pret);

  }
  getPretBook(idBook) {
    return this.http.get(environment.apiUrl + '/borrows/book/' + idBook);

  }
  getAllPrets() {
    //
    return this.http.get(environment.apiUrl + '/borrows');
  }
  getOnePret(idPret) {
    this.pretCollection = this.afs.collection('Prets', ref =>
      ref.where('idPret', '==', idPret)
    );
    const pret = this.pretCollection.valueChanges();
    return pret;
  }
  rendu(pret) {
    return this.http.put(environment.apiUrl + '/borrows', pret);

  }
}
