import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {GoogleMaps} from '@ionic-native/google-maps';

import { BrMaskerModule } from 'br-mask';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

export const firebaseConfig = {
    apiKey: 'AIzaSyDZeIeyaP0MJhtXQz_n7q0iXhBie3SqdQY',
    authDomain: 'freeyou-e2412.firebaseapp.com',
    databaseURL: 'https://freeyou-e2412.firebaseio.com',
    projectId: 'freeyou-e2412',
    storageBucket: 'freeyou-e2412.appspot.com',
    messagingSenderId: '297350647628',
    appId: '1:297350647628:web:d8ba4cbf784868db21c9e9',
    measurementId: 'G-0JL8WL3HV0'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrMaskerModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrMaskerModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GoogleMaps
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
