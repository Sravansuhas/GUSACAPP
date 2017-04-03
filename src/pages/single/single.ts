import { Component } from '@angular/core';
import {Http} from '@angular/http';
import { NavController, NavParams, ModalController} from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';



@Component({
  selector: 'page-single',
  templateUrl: 'single.html'
})
export class SinglePage {
	datas:any=[];
	comments:any;
	
  constructor(public navCtrl: NavController, public params: NavParams,private http:Http, private modalCtrl:ModalController,public platform:Platform) {
  this.platform=platform;
	this.http.get(params.data.url+"/?_embed").subscribe(data => {
		this.datas.push(data.json());
		
			this.http.get(data.json()._links.replies[0].href).subscribe(comment => {
		this.comments=comment.json();
	});
		});

		

  }
  
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad SinglePage');
  }

launch(url){

		this.platform.ready().then(()=>{
			let ref = new InAppBrowser(url,'_blank');
		});
}
}
