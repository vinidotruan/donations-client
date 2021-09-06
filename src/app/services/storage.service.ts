import { Injectable } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private storage: AngularFireStorage) {}

  public upload = (event: Event, storage = 'images'): AngularFireUploadTask => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    const fileName = file.name;
    const task = this.storage.upload(`${storage}/${fileName}`, file);
    return task;
  };

  getUploadPorcentage(task: AngularFireUploadTask) {
    return task.percentageChanges();
  }
}
