import { Component } from '@angular/core';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'list1.html'
})
export class List1Page {
	constructor(public navCtrl: NavController){

	}
	BackHome(){
    	this.navCtrl.setRoot(HelloIonicPage);
  	}
}
