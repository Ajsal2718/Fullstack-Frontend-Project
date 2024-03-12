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
    this.serve.login(this.forms.value).subscribe((res) => {
    console.log(this.forms.value);
      
      if(res){
        this.route.navigate(['home']);
        // this.serve.isLogged = true;
        console.log(res);
        
      }
    },(err) => {
      alert('Username or Password is incorrect');
      console.log(err);
      // this.submit=false;
    }
    )
  }
}
