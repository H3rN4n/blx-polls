import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { PollComponent } from './poll/poll.component';
import { ContactComponent } from './contact/contact.component';
import { SplashComponent } from './splash/splash.component';


@NgModule({
  declarations: [
    AppComponent,
    PollComponent,
    ContactComponent,
    SplashComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
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
    customElements.define('element-app', el);
   }
}
