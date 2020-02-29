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
export class ClientsService {
  private userCollection: AngularFirestoreCollection;
  private pretCollection: AngularFirestoreCollection;
  user: Observable<any>;
  picId;
  constructor(
    private afs: AngularFirestore,
    private afStorage: AngularFireStorage
  ) {
    this.userCollection = afs.collection('Users');
    this.user = this.userCollection.valueChanges();
  }
  getClients() {
    // get a lot of clients
    this.userCollection = this.afs.collection('Users');
    const users = this.userCollection.valueChanges();
    return users;
  }
  getClient(idUser) {
    // getOne client
    this.userCollection = this.afs.collection('Users', ref =>
      ref.where('idUser', '==', idUser)
    );
    const oneUser = this.userCollection.valueChanges();
    return oneUser;
  }

  upload(event, id) {
    const path = `${id}`;
    return this.afStorage.ref(path).put(event);
  }
  async addClient(user, pic) {
    this.userCollection.add(user).then(data => {
      this.userCollection.doc(data.id).update({ idUser: data.id });
      this.upload(pic, data.id).then(async datta => {
        await datta.ref.getDownloadURL().then(url => {
          this.userCollection.doc(data.id).update({ image: url });
          this.picId = url;
        });
      });
      console.log(this.picId);
    });
  }
  getAllmyBooks(idUser) {
    this.pretCollection = this.afs.collection('Prets', ref =>
      ref.where('idUser', '==', idUser)
    );
    const prets = this.pretCollection.valueChanges();
    return prets;
  }
}
