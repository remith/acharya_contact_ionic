import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';

@Component({
  templateUrl: 'country.html'
})
export class CountryPage {
	constructor(public navCtrl: NavController){

	}
	BackHome(){
    	this.navCtrl.setRoot(HelloIonicPage);
  	}
}
