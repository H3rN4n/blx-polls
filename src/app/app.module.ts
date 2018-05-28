import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AngularFireModule, FirebaseOptionsToken, FirebaseAppNameToken, FirebaseAppConfigToken } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

const config = {
  apiKey: "AIzaSyBpXdrejVZAm3HECrt625BIUOQtR_5ABWw",
  authDomain: "amber-fire-6718.firebaseapp.com",
  databaseURL: "https://amber-fire-6718.firebaseio.com",
  projectId: "amber-fire-6718",
  storageBucket: "amber-fire-6718.appspot.com",
  messagingSenderId: "744011210078"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule,
    AngularFirestoreModule
  ],
  providers: [
    { provide: FirebaseOptionsToken, useValue: config},
    { provide: FirebaseAppNameToken, useValue: '[DEFAULT]' },
    { provide: FirebaseAppConfigToken, useValue: undefined }
  ],
  // bootstrap: [AppComponent],
  entryComponents:[
    AppComponent
  ]
})
export class AppModule { 
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('user-poll', el);
   }
}
