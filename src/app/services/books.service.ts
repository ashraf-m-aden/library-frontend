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
  private pretCollection: AngularFirestoreCollection;
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
    this.genreCollection = this.afs.collection('Genres');

    this.genreCollection.doc(id).update({ enabled: false });
  }
  addGenre(genre) {
    this.genreCollection = this.afs.collection('Genres');
    this.genreCollection.add(genre).then(data => {
      this.genreCollection.doc(data.id).update({ idGenre: data.id });
    });
  }
  getBooksByGenre(genre) {
    this.bookCollection = this.afs.collection('Books', ref =>
      ref.where('genre', '==', genre)
    );
    const books = this.bookCollection.valueChanges();
    return books;
  }
  getBooks() {
    // get a lot of Bookss
    this.bookCollection = this.afs.collection('Books', ref =>
      ref.where('enabled', '==', true)
    );
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
        await datta.ref.getDownloadURL().then(url => {
          this.bookCollection.doc(data.id).update({ image: url });
        });
      });
    });
  }
  borrowBook(pret) {
    this.pretCollection = this.afs.collection('Prets');
    this.pretCollection.add(pret).then(data => {
      this.pretCollection.doc(data.id).update({ idPret: data.id });
    });
    this.bookCollection.doc(pret.idBook).update({ disponible: false });
  }
  getPretBook(idBook) {
    this.pretCollection = this.afs.collection('Prets', ref =>
      ref.where('idBook', '==', idBook)
    );
    const prets = this.pretCollection.valueChanges();
    return prets;
  }
  getAllPrets() {
    this.pretCollection = this.afs.collection('Prets', ref =>
    ref.where('rendu', '==', false));
    const prets = this.pretCollection.valueChanges();
    return prets;
  }
  getOnePret(idPret) {
    this.pretCollection = this.afs.collection('Prets', ref =>
      ref.where('idPret', '==', idPret)
    );
    const pret = this.pretCollection.valueChanges();
    return pret;
  }
  rendu(pret) {
    this.pretCollection = this.afs.collection('Prets', ref =>
      ref.where('idPret', '==', pret.idPret)
    );
    this.pretCollection.doc(pret.idPret).update({ rendu: true, returnDate: pret.returnDate  });
    this.bookCollection = this.afs.collection('Books');
    this.bookCollection.doc(pret.idBook).update({ disponible: true});
  }
}
