import { Component, Input, OnInit, Output } from '@angular/core';
import { UserloginService } from 'src/app/core/service/userlogin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() logot: boolean = false;
  BagMenu: boolean = false;
  logout: boolean = false;
  out: 'Logout';
  onremove: boolean = false;

  constructor(private serv: UserloginService) {}
  ngOnInit(): void {
    this.onremove = this.serv.issignupcart;
    this.logout = this.serv.issignupcart;
    console.log(this.logot);
    
  }

  toggleBagMenu() {
    this.BagMenu = !this.BagMenu;
  }
}
