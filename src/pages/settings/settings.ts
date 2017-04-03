import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {FeedbackPage} from '../feedback/feedback'


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
	contacts:FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController, angFire:AngularFire) {
  		this.contacts=angFire.database.list('/ContactUs');
  }
  	feedback(){
  	this.navCtrl.push(FeedbackPage);
  	}
  	about() {
    let alert = this.alertCtrl.create({
      title: 'GUSAC App',
      subTitle: 'version : 1.0.0',
      buttons: ['OK']
    });
    alert.present();
  }

 	submit_contact():void{
 		let prompt=this.alertCtrl.create({
 			title:'Contact us',
 			message:'we love to help you..',
 			inputs:[
 						{
 							name:'name',
 							placeholder:"Enter your name.."
 						},
 						{
 							name:'reason',
 							placeholder:"your reason to contact us.."
 						},
 					
 						{
 							name:'contact',
 							placeholder:"Enter your mail/phone number"
 						}
 				],

 			buttons:[
 						{
 							text:"cancel",
 							handler:data=>{
 								console.log("cancel clicked");
 							}
 						},
 						{
 							text:"sumbit",
 							handler:data=>{
 								this.contacts.push({
 									name:data.name,
 									reason:data.reason,
 								
 								contact:data.contact
 								})
 							}
 						}

 			]
 		});

 	prompt.present();

 	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
