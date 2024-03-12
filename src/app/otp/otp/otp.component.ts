import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserloginService } from 'src/app/core/service/userlogin.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
})
export class OtpComponent implements OnInit {
  forms: any;
  submit: boolean = false;

  constructor(
    private fb: FormBuilder,
    private srvc: UserloginService,
    private route: Router
  ) {}

  ngOnInit() {
    this.forms = this.fb.group({
      otp1: ['', Validators.required],
      otp2: ['', [Validators.required]],
      otp3: ['', Validators.required],
      otp4: ['', Validators.required],
    });
  }
  get f() {
    return this.forms.controls;
  }

  onclick() {
    this.submit = true;
    // console.log(this.forms.value);
    const numbers = [
      this.forms.value.otp1,
      this.forms.value.otp2,
      this.forms.value.otp3,
      this.forms.value.otp4,
    ];
    const otp:string = numbers.toString().split(',').join('');
    this.srvc.otpVerification(otp).subscribe((res:{message:string,success:boolean})=>{
      if (res.success) {
        this.route.navigate(['login'])
      }else{
        alert('You are not loggedin')
      }
    },(err)=>{
      console.log(err);
    })
  }
}
