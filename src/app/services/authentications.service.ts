import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationsService {
  public userData: any;

  constructor(
    private angularFirestore: AngularFirestore,
    private angularFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {    
    this.angularFireAuth.authState.subscribe(
      user => {
        if(!user) {
          this.router.navigate(['login']);
        }
      }
    )
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider: firebase.auth.AuthProvider) {
    return this.angularFireAuth.signInWithPopup(provider)
    .then(result => {
      this.ngZone.run(() => {
        console.log(result)
        this.router.navigate(['login'])
      })
    })
  }
}
