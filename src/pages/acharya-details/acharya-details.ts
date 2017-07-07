import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CallNumber } from 'ionic-native';
import { EmailComposer } from 'ionic-native';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';

@Component({
  selector: 'page-acharya-details',
  templateUrl: 'acharya-details.html'
})

export class AcharyaDetailsPage {
  selectedAcharya: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedAcharya = navParams.get('item');
  }
  
  callNumber() {
  var cno = this.selectedAcharya.contact;
  CallNumber.callNumber(cno, true)
  .then(() => console.log('Dialer is launched!'))
  .catch(() => console.log('Error launching dialer'));
  }

  sendEmail() {
    EmailComposer.open({
                to: this.selectedAcharya.email,
                cc: null,
                bcc: null,
                attachments: null,
                subject: 'Test subject',
                body: 'Test body, kind regards',
                isHtml: false
            });
  }
  BackHome(){
    this.navCtrl.setRoot(HelloIonicPage);
  }
}
