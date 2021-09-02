import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { getFirestore } from 'firebase/firestore';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ActionsComponent } from './actions/actions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { ActionComponent } from './action/action.component';
import { ActionFormComponent } from './action-form/action-form.component';

export const firebaseConfig = {
  apiKey: "AIzaSyAkewZOdUa47WoH-6ROZtjoEq3tc4e9BcU",
  authDomain: "donations-62786.firebaseapp.com",
  databaseURL: "https://donations-62786-default-rtdb.firebaseio.com",
  projectId: "donations-62786",
  storageBucket: "donations-62786.appspot.com",
  messagingSenderId: "145332283798",
  appId: "1:145332283798:web:f1eca6c2107994581c15b7",
  measurementId: "G-Q2C50KJJJG"
};
@NgModule({
  declarations: [
    AppComponent,
    ActionsComponent,
    FooterComponent,
    ProfileComponent,
    LoginComponent,
    ActionComponent,
    ActionFormComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
