import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ActionsService {
  private itemsCollection: AngularFirestoreCollection<any>;
  // private items: Observable<any[]>;

  constructor(private afs: AngularFirestore) { 
    this.itemsCollection = afs.collection('actions')
    console.log(this.itemsCollection.ref)
  }

  getActions() {
    return this.itemsCollection.valueChanges();
  }
}
