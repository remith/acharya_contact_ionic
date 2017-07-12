import { Component } from '@angular/core';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
//import { AcharyaService } from '../../services/acharya-service';

@Component({
  templateUrl: 'list1.html'
})
export class List1Page {
	constructor(public navCtrl: NavController){ }
	
	BackHome(){
    	this.navCtrl.setRoot(HelloIonicPage);
  	}
  	
  	ItemTapped(event, item) {
  		console.log(item);
    	this.navCtrl.push(ListPage, {
      			salutation: item
   		 });
	}
}
