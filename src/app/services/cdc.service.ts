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
export class CdcService {
  private cdcCollection: AngularFirestoreCollection;
  cdc: Observable<any>;
  picId;
  constructor(
    private afs: AngularFirestore,
    private afStorage: AngularFireStorage
  ) {
    this.cdcCollection = afs.collection('Cdcs');
    this.cdc = this.cdcCollection.valueChanges();
  }
  getCdcs() {
    // get a lot of Cdcs
    this.cdcCollection = this.afs.collection('Cdcs', ref =>
    ref.where('enabled', '==', true)
  );
    const Cdcs = this.cdcCollection.valueChanges();
    return Cdcs;
  }
  getcdc(idCdc) {
    // getOne Cdcs
    this.cdcCollection = this.afs.collection('Cdcs', ref =>
      ref.where('idCdc', '==', idCdc).where('enabled', '==', true)
    );
    const oneCdc = this.cdcCollection.valueChanges();
    return oneCdc;
  }

  upload(event, id) {
    const path = `${id}`;
    return this.afStorage.ref(path).put(event);
  }
  addCdc(cdc) {
    this.cdcCollection.add(cdc).then(data => {
      this.cdcCollection.doc(data.id).update({ idCdc: data.id });
    });
  }
  deleteCdc(cdc) {
      this.cdcCollection.doc(cdc.idCdc).update({ enabled: false });

  }
  updateCdc(cdc) {
    this.cdcCollection.doc(cdc.idCdc).update({ name: cdc.name, address: cdc.address, number: cdc.number });

  }

}
