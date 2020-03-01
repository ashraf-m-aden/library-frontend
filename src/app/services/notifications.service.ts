import { Injectable } from '@angular/core';
import 'firebase/firestore';
import 'firebase/storage';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private notifCollection: AngularFirestoreCollection;
  options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  constructor(
    private afs: AngularFirestore,

  ) { }
  getAllNotifs() {

    this.notifCollection = this.afs.collection('Prets'
    , ref =>
      ref.where('returnDate', '<=', new Date().toLocaleDateString('fr-FR', this.options))
      .where('rendu', '==', false)
      );

    const notifs = this.notifCollection.valueChanges();
    return notifs;
  }
}
