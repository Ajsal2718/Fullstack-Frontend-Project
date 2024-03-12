import { Component,OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { UserloginService } from '../core/service/userlogin.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  forms: any;
  submit: boolean = false;
  OtpValidationPage:boolean = false;
  constructor(private fb:FormBuilder, private srvc: UserloginService,private route: Router){ }
  ngOnInit(){
    this.forms = this.fb.group({
      username: ['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
      // phone:['',Validators.required]
     });

   }  
   get f() { 
    return this.forms.controls; 
  }
  onclick(){
    this.submit = true;
    this.srvc.signUp(this.forms.value).subscribe((res) => {
      console.log(this.forms.value);
      
      if(res){
        this.route.navigate(['otp'])
        console.log(res);
        
      }
      this.OtpValidationPage = true
    },(err) => {
      // alert('Already use  the email id or Password is incorrect');
      console.log(err);
    }
    )
  }
  otpValidation(){
    
  }
  login(){

  }
}

