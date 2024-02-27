import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserloginService } from 'src/app/core/service/userlogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  forms :any;
  submit : boolean =  false;
  constructor(private fb:FormBuilder,private serve : UserloginService){ }
  ngOnInit(): void {
    this.forms = this.fb.group({
      username: ['',Validators.required],
      password :['',Validators.required]
    });
  }

  get f(){
    return this.forms.controls;
  }

  onclick(){
    this.submit = true;
    this.serve.login(this.forms.value);
  }
}
