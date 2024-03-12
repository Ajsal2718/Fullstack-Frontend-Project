import { Component, Input, OnInit, inject } from '@angular/core';
import { UserloginService } from 'src/app/core/service/userlogin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  BagMenu: boolean = false;
  // isLoggedIn: boolean = false;
  // srvc: UserloginService = inject(UserloginService);
  constructor(public srvc: UserloginService) {}
  ngOnInit(): void {}

  toggleBagMenu() {
    this.BagMenu = !this.BagMenu;
  }
  logout() {
    this.srvc.setLoggedIn(); // Call setLoggedIn method from the service
  }
}
