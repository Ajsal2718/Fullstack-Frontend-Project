import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserloginService } from 'src/app/core/service/userlogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  forms :any;
  submit : boolean =  false;
  constructor(private fb:FormBuilder,private serve : UserloginService,private route:Router){ }
  ngOnInit(): void {
    this.forms = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });
  }

  get f(){
    return this.forms.controls;
  }

  onclick(){
    this.submit = true;
    this.serve.login(this.forms.value).subscribe((res:{success:string,message:string,accessToken:string,userId:string}) => {
    console.log(this.forms.value);
      
      if(res.success){
        localStorage.setItem('token',res.accessToken);
        localStorage.setItem('userId',res.userId)
        this.route.navigate(['home']);
        console.log(res);
        alert('Login Successfully');
      }
    },(err) => {
      alert('Username or Password is incorrect');
      console.log(err);
      // this.submit=false;
    }
    )
  }
}
