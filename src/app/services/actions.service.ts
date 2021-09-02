import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Action } from '../shared/models/actions';
@Injectable({
  providedIn: 'root'
})
export class ActionsService {
  private itemsCollection: AngularFirestoreCollection<Observable<any>>;

  constructor(private afs: AngularFirestore) { 
    this.itemsCollection = this.afs.collection('actions')
    console.log(this.itemsCollection.ref)
  }

  getActions = (): Observable<Observable<any>[]> => {
    return this.itemsCollection.valueChanges();
  }

  getAction = (id: string): Observable<any> => {
    console.log(id)
    return this.itemsCollection.doc(id).get();
  }
}
