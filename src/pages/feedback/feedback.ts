import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html'
})
export class FeedbackPage {
	feedbacks:FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController, angFire:AngularFire) {
  		this.feedbacks=angFire.database.list('/Feedback');
  }

 	addFeedback():void{
 		let prompt=this.alertCtrl.create({
 			title:'Feedback us',
 			message:'we love your feeds',
 			inputs:[
 						{
 							name:'name',
 							placeholder:"Enter your name.."
 						},
 						{
 							name:'about_app',
 							placeholder:"This app is..."
 						},
 						{
 							name:'suggestion',
 							placeholder:"Any suggestions.."
 						},
 						{
 							name:'mail',
 							placeholder:"Enter your mail.."
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
 							text:"feed",
 							handler:data=>{
 								this.feedbacks.push({
 									name:data.name,
 									about_app:data.about_app,
 									suggestion:data.suggestion,
 									mail:data.mail
 								})
 							}
 						}

 			]
 		});

 	prompt.present();

 	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }

}
