import { Injectable,OnInit,inject } from '@angular/core';
import { SignupModel } from '../models/signup-model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  signinValues:SignupModel[] = [];
  signupValues:SignupModel[] = [];
  user:SignupModel[] = [];
  remove: boolean = false;
  issignupcart: boolean = false;

  constructor(private route: Router) {
    const localdata = localStorage.getItem('signupUsers');
    if (localdata != null) {
      this.user = JSON.parse(localdata);
    }
  }

  // SignUp Section Functions
  signUp() {
    this.remove = true
    localStorage.setItem('signupUsers',JSON.stringify(this.user));
    alert('SignUp Successfully');
    this.route.navigate(['login']);
    if(this.signinValues === this.signinValues){
    }
  }

  // Login Section Functions
  login(value:{username:string,password:string}) {
    this.remove = false;
    console.log(this.signupValues);
    
    const findperson = this.user.filter((x) => {
      return x.firstname === value.username && x.password === value.password;
    })
    
    if(findperson.length == 0 || value.username === null || value.password === null){
      alert('Your Not Signup')
      this.issignupcart = false;
    }
    else{
      this.route.navigate(['home']);
      this.issignupcart = true;
    }
    console.log(this.signupValues); 
  }
  
  // signUp(formValue:NgForm,filr:File){
  //   const formData = new FormData();
  //   formData.append('name',formValue.value.name);
  //   formData.append('email',formValue.value.email);
  //   formData.append('password',formValue.value.password);
  //   // return this.http.post()
  // }
} 
