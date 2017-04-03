import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';
/*
  Generated class for the Contactus page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html'
})
export class ContactusPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public platform:Platform) {this.platform=platform}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactusPage');
  }

  launch(url){

		this.platform.ready().then(()=>{
			let ref = new InAppBrowser(url,'_system');
		});
}

}
