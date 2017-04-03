import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

/*
  Generated class for the Ideas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ideas',
  templateUrl: 'ideas.html'
})
export class IdeasPage {
	ideas:FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController, angFire:AngularFire) {
  		this.ideas=angFire.database.list('/Ideas');
  }

 	addIdea():void{
 		let prompt=this.alertCtrl.create({
 			title:'share your thoughts',
 			message:'thoughts have no limits,exchange your thoughts here..',
 			inputs:[
 						{
 							name:'title',
 							placeholder:"name your idea"
 						},
 						{
 							name:'postedby',
 							placeholder:"enter your name"
 						},
 						{
 							name:'content',
 							placeholder:"describe your idea"
 						},
 						{
 							name:'mail',
 							placeholder:"enter your mail"
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
 							text:"Post Idea",
 							handler:data=>{
 								this.ideas.push({
 									title:data.title,
 									postedby:data.postedby,
 									content:data.content,
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
