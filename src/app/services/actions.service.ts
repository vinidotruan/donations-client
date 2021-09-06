import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentSnapshot,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Action } from '../shared/models/actions';
@Injectable({
  providedIn: 'root',
})
export class ActionsService {
  private itemsCollection: AngularFirestoreCollection<Observable<Action>>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection('actions', (ref) =>
      ref.orderBy('createdAt', 'desc')
    );
  }

  getActions = (): Observable<Observable<Action>[]> => {
    return this.itemsCollection.valueChanges({ idField: 'id' });
  };

  getAction = (id: string): Observable<Observable<Action> | undefined> => {
    this.itemsCollection.get({});
    return this.itemsCollection.doc(id).valueChanges({ idField: 'id' });
  };

  store = (data: any) => {
    return this.itemsCollection.ref.doc(this.afs.createId()).set(data);
  };
}
