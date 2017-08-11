import { Component } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { NavController } from 'ionic-angular';
import { AcharyaService } from '../../services/acharya-service';
import { NgForm } from '@angular/forms';
//import { Acharya } from '../..services/acharya-modal.ts'


@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})
export class FormPage {
  signup: {name?: string, email?: string, phone?: string} = {};
  submitted = false;
  constructor(private acharyaService: AcharyaService) {

  /*   $scope.message = {
      'name' : '',
      'email' : '',
      'phone' : ''
    };
	} */
/*  ionViewDidLoad(){
    let headers = new Headers();
    headers.append('content-type','application/json');
    let body ={
      message:"message"
    };*/

  }
  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.acharyaService.signUp(this.signup.name, this.signup.email,this.signup.phone);
    }
  }
  /*postAcharya(){
    console.log("InsidePost ");
    this.acharyaService.postAcharya(this.name,this.email,this.phone)
        .subscribe(
            posts => this.acharya = posts,
            error => this.errorMessage = <any>error);
  }*/
}