import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {GoogleMaps} from '@ionic-native/google-maps';

//MASCARA PERSONALIZADA
import { BrMaskerModule } from 'br-mask';

//FIREBASE 

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {environment} from '../environments/environment';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrMaskerModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrMaskerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GoogleMaps
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
