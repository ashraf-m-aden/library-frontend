import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  constructor(

  ) { }
  getAllNotifs() {

    // this.notifCollection = this.afs.collection('Prets'
    // , ref =>
    //   ref.where('returnDate', '<=', new Date().toLocaleDateString('fr-FR', this.options))
    //   .where('rendu', '==', false)
    //   );

    // const notifs = this.notifCollection.valueChanges();
    // return notifs;
    return null;
  }
}
