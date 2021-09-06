import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private itemsCollections: AngularFirestoreCollection<Observable<any>>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.itemsCollections = this.afs.collection('categories');
  }
  
  public getCategories = (): Observable<Observable<any>[]> => this.itemsCollections.valueChanges({ idField: 'id' });
}
