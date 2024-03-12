import { Component, OnInit, inject } from '@angular/core';
import { UserloginService } from 'src/app/core/service/userlogin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  srvc:UserloginService = inject(UserloginService);
  logbtn:boolean = this.srvc.isLogged;

  ngOnInit(): void {
    
  }

}
