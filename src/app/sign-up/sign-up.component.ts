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
  submit: boolean;
  constructor(private fb:FormBuilder, private srvc: UserloginService,private route: Router){ }
  ngOnInit(){
    this.forms = this.fb.group({
      firstname: ['',Validators.required],
      Email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
     });

   }  
   get f() { 
    return this.forms.controls; 
  }

    onclick() {
    this.submit = true;
    // console.log(this.forms);
    this.srvc.user.push(this.forms.value);
    // this.srvc.signUp();
    this.route.navigate(['login']);
    // this.forms.reset();
   }
}

