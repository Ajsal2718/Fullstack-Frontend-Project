import { NgModule } from "@angular/core";
import { ProductlistComponent } from "./productlist/productlist.component";
import { NavbarComponent } from "./nav-bar/navbar/navbar.component";
import { FooterComponent } from "./footer/footer/footer.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { MatModule } from "../mat-module/mat.module";
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';


@NgModule({
    declarations:[
        NavbarComponent,
        ProductlistComponent,
        FooterComponent,
        AdminNavbarComponent,

    ],
    imports:[
        CommonModule,
        RouterModule,
        FormsModule,
        MatModule,
    ],
    exports:[
        NavbarComponent,
        ProductlistComponent,
        FooterComponent,
        AdminNavbarComponent

    ],
})

export class SharedModule { }