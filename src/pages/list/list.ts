import {Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AcharyaDetailsPage } from '../acharya-details/acharya-details';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { AcharyaService } from '../../services/acharya-service';



@Component({
  selector: 'list-page',
  templateUrl: 'list.html'
})


export class ListPage {

  errorMessage:any;
  acharya: any;
  currentPageClass = this;
  alphaScrollItemTemplate: string = `<ion-list><ion-item (click)="currentPageClass.ItemTapped($event, item)"><ion-avatar item-left><img src="http://www.chinmayamission.com/wp-content/themes/GCMW/images/{{item.image}}"></ion-avatar><h2>{{item.name}}</h2><p>{{item.city}}</p></ion-item></ion-list>`;
  triggerAlphaScrollChange: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private acharyaService: AcharyaService) {
        this.getAcharyas();
  }

  getAcharyabySalutation(salutation: String) {
       console.log("InsidegetAcharyabySalutation "+ salutation);
       this.acharyaService.getAcharyabySalutation(salutation)
        .subscribe(
            posts => this.acharya = posts,
            error => this.errorMessage = <any>error);
     }
  getAcharyabyCountry(country: String) {
       console.log("InsidegetAcharyabyCountry "+ country);
       this.acharyaService.getAcharyabyCountry(country)
        .subscribe(
            posts => this.acharya = posts,
            error => this.errorMessage = <any>error);
     }

  getAcharyas() {
     console.log("InsidegetAcharya " );
       return this.acharyaService.getAcharyas()
               .subscribe(
                 post => 
                 );

          //return JSON.stringify(this.acharyaService.responseData);
    }

            /*.subscribe(
            posts => this.acharya = posts,
            error => this.errorMessage = <any>error);*/
  

  sleep(ms) {
              return new Promise(resolve => setTimeout(resolve, ms));
        }

  ItemTapped(event, item) {
    this.navCtrl.push(AcharyaDetailsPage, {
      item: item
    });
  }
  BackHome(){
    this.navCtrl.setRoot(HelloIonicPage);
  }

}
