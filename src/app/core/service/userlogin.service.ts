import { Injectable, OnInit, inject } from '@angular/core';
import { SignupModel } from '../models/signup-model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserloginService {
  signinValues: SignupModel[] = [];
  signupValues: SignupModel[] = [];
  user: SignupModel[] = [];
  remove: boolean = false;
  issignupcart: boolean = false;
  isLogged:boolean = false;

  http: HttpClient = inject(HttpClient);

  constructor(private route: Router) {
    const localdata = localStorage.getItem('signupUsers');
    if (localdata != null) {
      this.user = JSON.parse(localdata);
    }
  }

  // OTP Send to Email Section Functions
  signUp(signValue: {
    email: string;
    password: string;
    username: string;
  }): Observable<object> {
    console.log(signValue);

    return this.http.post(`http://localhost:1827/api/signup`, signValue, {
      withCredentials: true,
    });
  }

  //////// Otp Verify ///////
  otpVerification(otpNumber: string): Observable<object> {
    const otp = { otp: otpNumber };
    return this.http.post(`http://localhost:1827/api/otpverify`, otp, {
      withCredentials: true,
    });
  }

  // Login Section Functions
  login(value: { email: string; password: string }): Observable<object> {
    console.log(value);
    return this.http.post(`http://localhost:1827/api/login`, value);
  }
}
