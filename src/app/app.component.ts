import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';


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
import {WorkshopsPage} from '../pages/Workshops/workshops';
import {RegisterPage} from '../pages/register/register';


@Component({
  templateUrl: 'app.html',

})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = IndexPage;
  activePage: any;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {title:'Home',component:IndexPage},
      {title:'Contactus',component:ContactusPage},
      {title:'EventsPage',component:EventsPage},
      {title:'Feedback',component:FeedbackPage},
      {title:'Gcied',component:GciedPage},
      {title:'Gstudio',component:GstudioPage},
      {title:'Ideas',component:IdeasPage},
      
      {title:'Kalakrithi',component:KalakrithiPage},
      {title:'OffersZone',component:OfferszonePage},
      {title:'Settings',component:SettingsPage},
      {title:'TechTeam',component:TechteamPage},
      {title:'Writersclub',component:WritersclubPage},
      {title:'Workshops/events',component:WorkshopsPage},
      {title:'register',component:RegisterPage}
   
    ];
	
	this.activePage = this.pages[0];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
	this.activePage = page;
  }
  
  checkActive(page){
	return page==this.activePage;
  }
}
