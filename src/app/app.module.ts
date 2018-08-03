import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ParkerenPage } from "../pages/parkeren/parkeren";
import { ToiletPage } from "../pages/toilet/toilet";
import { InstellingenPage } from "../pages/instellingen/instellingen";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ParkerenPage,
    ToiletPage,
    InstellingenPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ParkerenPage,
    ToiletPage,
    InstellingenPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
