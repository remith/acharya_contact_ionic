import { Component } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { NavController } from 'ionic-angular';
import { AcharyaService } from '../../services/acharya-service';
import { NgForm } from '@angular/forms';
//import { Acharya } from '../..services/acharya-modal.ts'
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})
export class FormPage {
  signup: {name?: string, email?: string, phone?: string} = {};
  submitted = false;
  resp:{};
  constructor(private acharyaService: AcharyaService, public alertCtrl: AlertController)  {  }
  
  onSignup(form: NgForm) 
  {
    this.submitted = true;

    if (form.valid) 
    {
      this.resp = this.acharyaService.signUp(this.signup.name, this.signup.email, this.signup.phone);
      console.log(this.resp);
    }
    let alert = this.alertCtrl.create({
      title: 'Success!',
      message: 'Data Submitted Successfully',
      buttons: ['Ok']
    });
    alert.present()
  }
}