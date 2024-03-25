import { Component, Input, OnInit, inject } from '@angular/core';
import { UserloginService } from 'src/app/core/service/userlogin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  BagMenu: boolean = false;
  isLoggedIn: boolean = false;
  isLogoutBtn : boolean = false;
  constructor(public srvc: UserloginService) {}
  ngOnInit(): void {
    const token : string = localStorage.getItem('token');
     if (token){
      this.isLoggedIn;
       this.isLogoutBtn = true;
     } else {
      this.isLoggedIn = true;
      this.isLogoutBtn = false;
     }
  }
  toggleBagMenu() {
    this.BagMenu = !this.BagMenu;
  }
  logout() {
    localStorage.clear();
  }
}
