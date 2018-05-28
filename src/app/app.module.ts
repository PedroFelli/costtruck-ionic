import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactProvider } from '../providers/contact/contact';
import { OfertasProvider } from '../providers/ofertas/ofertas';
import { FreteProvider } from '../providers/frete/frete';
import { VeiculoProvider } from '../providers/veiculo/veiculo';




@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp), AngularFireModule.initializeApp({
        apiKey: "AIzaSyD-IqANd8LWlIsIztEgcksugBlk40gJY8E",
        authDomain: "costtruck.firebaseapp.com",
        databaseURL: "https://costtruck.firebaseio.com",
        projectId: "costtruck",
        storageBucket: "costtruck.appspot.com",
        messagingSenderId: "328801734791"
    }),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactProvider,  
    OfertasProvider,
    FreteProvider,
    VeiculoProvider
  ]
})
export class AppModule {}
