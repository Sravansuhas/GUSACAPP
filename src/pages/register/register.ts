import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
	events:FirebaseListObservable<any>;
  registered_users:FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController, angFire:AngularFire) {
  		this.events=angFire.database.list('/Events');
      this.registered_users=angFire.database.list('/Registered_users');
  }

 	registerEvent():void{
 		let prompt=this.alertCtrl.create({
 			title:'Register for an event',
      message:'Pay offline after registering',
 			
 			inputs:[
 						{
 							name:'title',
 							placeholder:"Event name.."
 						},
 						{
 							name:'user_name',
 							placeholder:"Your name please.."
 						},
 						{
 							name:'phone_number',
 							placeholder:"Mobile number for notifications."
 						},
 						{
 							name:'mail',
 							placeholder:"Enter your mail."
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
 							text:"Register",
 							handler:data=>{
 								this.registered_users.push({
 									title:data.title,
 									user_name:data.user_name,
 									phone_number:data.phone_number,
 									mail:data.mail
 								})
 							}
 						}

 			]
 		});

 	prompt.present();

 	}



  ionViewDidLoad() {
    console.log('ionViewDidLoad IdeasPage');
  }

}
