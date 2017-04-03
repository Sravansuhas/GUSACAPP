import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {ContactusPage} from '../pages/contactus/contactus';
import {EventsPage} from '../pages/events/events';
import {FeedbackPage} from '../pages/feedback/feedback';
import {GciedPage} from '../pages/gcied/gcied';
import {GstudioPage} from '../pages/gstudio/gstudio';
import {IdeasPage} from '../pages/ideas/ideas';
import {IndexPage} from '../pages/index/index';
import {KalakrithiPage} from '../pages/kalakrithi/kalakrithi';
import {OfferszonePage} from '../pages/offerszone/offerszone';
import {SettingsPage} from '../pages/settings/settings';
import {TechteamPage} from '../pages/techteam/techteam';
import {WritersclubPage} from '../pages/writersclub/writersclub';
import {SinglePage} from '../pages/single/single';
import { AngularFireModule } from 'angularfire2';
import {WorkshopsPage} from '../pages/Workshops/workshops';
import {RegisterPage} from '../pages/register/register';
import {LoginPage} from '../pages/login/login';

export const firebaseConfig={
     apiKey: "AIzaSyBle6Z0Za37kJQwWbwMMYtUtI6XWXuqhI4",
    authDomain: "gusac-87084.firebaseapp.com",
    databaseURL: "https://gusac-87084.firebaseio.com",
    storageBucket: "gusac-87084.appspot.com",
    messagingSenderId: "866304642505" 
} ;

@NgModule({
  declarations: [
    MyApp,
   
    ContactusPage,
    EventsPage,
    FeedbackPage,
    GciedPage,
    GstudioPage,
    IdeasPage,
    IndexPage,
    KalakrithiPage,
    OfferszonePage,
    SettingsPage,
    TechteamPage,
    WritersclubPage,
    SinglePage,
    WorkshopsPage,
    RegisterPage,
    LoginPage
   
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
   
    ContactusPage,
    EventsPage,
    FeedbackPage,
    GciedPage,
    GstudioPage,
    IdeasPage,
    IndexPage,
    KalakrithiPage,
    OfferszonePage,
    SettingsPage,
    TechteamPage,
    WritersclubPage,
    SinglePage,
       WorkshopsPage,
       RegisterPage,
       LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
