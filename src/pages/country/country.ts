import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { ListPage } from '../list/list';

@Component({
  templateUrl: 'country.html'
})
export class CountryPage {
	constructor(public navCtrl: NavController){
	}

	BackHome(){
    	this.navCtrl.setRoot(HelloIonicPage);
  	}

  	ItemTapped(event, item) {
  		console.log(item);
    	this.navCtrl.push(ListPage, {
      			country: item
   		 });
	}
}
