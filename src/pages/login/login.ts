import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AuthProviders,AuthMethods,AngularFire} from 'angularfire2';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
	email:any;
	password:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public angFire:AngularFire) {}

  login(){
  	this.angFire.auth.login({
  		email:this.email,
  		password:this.password
  	},

  	{
  		provider:AuthProviders.Password,
  		method:AuthMethods.Password
  	}
  	).then((response)=>{
  		console.log('login sucess'+JSON.stringify(response));
  		let currentUser={
  			email:response.auth.email,
  			picture:response.auth.photoURL
  		};
  		window.localStorage.setItem('currentUser',JSON.stringify(currentUser));
  		this.navCtrl.pop();
  	}).catch((error)=>{
  		console.log(error);
  	})
  }

  fblogin(){
  	this.angFire.auth.login({
  		provider:AuthProviders.Facebook,
  		method:AuthMethods.Popup
  	}).then((response)=>{
  		console.log('login sucess'+JSON.stringify(response));
  		let currentUser={
  			email:response.auth.displayName,
  			picture:response.auth.photoURL
  		};
  		window.localStorage.setItem('currentUser',JSON.stringify(currentUser));
  		this.navCtrl.pop();
  	}).catch((error)=>{
  		console.log(error);
  	})

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
