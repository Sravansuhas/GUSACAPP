import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

/*
  Generated class for the Ideas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {
	events:FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController, angFire:AngularFire) {
  		this.events=angFire.database.list('/Events');
  }

 	addEvent():void{
 		let prompt=this.alertCtrl.create({
 			title:'Enter new event',
 			
 			inputs:[
 						{
 							name:'title',
 							placeholder:"Event name"
 						},
 						{
 							name:'postedby',
 							placeholder:"Event organisers"
 						},
 						{
 							name:'date',
 							placeholder:"Event date"
 						},
 						{
 							name:'price',
 							placeholder:"Enter ticket price"
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
 							text:"Add Event",
 							handler:data=>{
 								this.events.push({
 									title:data.title,
 									postedby:data.postedby,
 									date:data.date,
 									price:data.price
 								})
 							}
 						}

 			]
 		});

 	prompt.present();

 	}

 	editEvent(event):void{
 		let prompt=this.alertCtrl.create({
 			title:'Edit this event',
 			
 			inputs:[
 						{
 							name:'title',
 							placeholder:event.title
 						},
 						{
 							name:'postedby',
 							placeholder:event.postedby
 						},
 						{
 							name:'date',
 							placeholder:event.date
 						},
 						{
 							name:'price',
 							placeholder:event.price
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
 							text:"update Event",
 							handler:data=>{
 								let newTitle:String=event.title;
 								let newPostedby:String=event.postedby;
 								let newDate:String=event.date;
 								let newPrice:String=event.price;

 								if(data.title!=''){
 									newTitle=data.title;
 								}
 								if(data.postedby!=''){
 									newPostedby=data.postedby;
 								}
 								if(data.date!=''){
 									newDate=data.date;
 								}
 								if(data.price!=''){
 									newPrice=data.price;
 								}

 								this.events.update(event.$key,{
 									title:newTitle,
 									postedby:newPostedby,
 									date:newDate,
 									price:newPrice
 								})
 							}
 						}

 			]
 		});

 	prompt.present();

 	}

 	deleteEvent(eventID):void{
 		let prompt=this.alertCtrl.create({
 			title:'Delete this event',
 			
 			

 			buttons:[
 						{
 							text:"cancel",
 							handler:data=>{
 								console.log("cancel clicked");
 							}
 						},
 						{
 							text:"Delete Event",
 							handler:data=>{
 								this.events.remove(eventID);
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
