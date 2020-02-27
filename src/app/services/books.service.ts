import { Injectable } from '@angular/core';
import 'firebase/firestore';
import 'firebase/storage';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private bookCollection: AngularFirestoreCollection;
  private genreCollection: AngularFirestoreCollection;
  book: Observable<any>;
  picId;
  constructor(
    private afs: AngularFirestore,
    private afStorage: AngularFireStorage
  ) {
    this.bookCollection = afs.collection('Books');
    this.book = this.bookCollection.valueChanges();
  }
  getGenres() {
    this.genreCollection = this.afs.collection('Genres');
    const genres = this.genreCollection.valueChanges();
    return genres;
  }
  deleteGenre(id) {
    this.genreCollection.doc(id).update({ enabled: false });

  }
  addGenre(genre) {
    this.genreCollection.add(genre).then(data => {
      this.genreCollection.doc(data.id).update({ idGenre: data.id });
      });
  }
  getBooksByGenre(genre) {
    this.bookCollection = this.afs.collection('Books', ref =>
    ref.where('genre', '==', genre));
    const books = this.bookCollection.valueChanges();
    return books;
  }
  getBooks() {
    // get a lot of Bookss
    this.bookCollection = this.afs.collection('Books', ref =>
    ref.where('enabled', '==', true));
    const books = this.bookCollection.valueChanges();
    return books;
  }
  getBook(idbook) {
    // getOne Books
    this.bookCollection = this.afs.collection('Books', ref =>
      ref.where('idBook', '==', idbook).where('enabled', '==', true)
    );
    const onebook = this.bookCollection.valueChanges();
    return onebook;
  }

  upload(event, id) {
    const path = `${id}`;
    return this.afStorage.ref(path).put(event);
  }
  addBook(book, pic) {

    this.bookCollection.add(book).then(data => {
      this.bookCollection.doc(data.id).update({ idBook: data.id });
      this.upload(pic, data.id).then(async datta => {
      await  datta.ref.getDownloadURL().then(url => {
          this.bookCollection.doc(data.id).update({ image: url });

        });
      });

    });
  }

}
