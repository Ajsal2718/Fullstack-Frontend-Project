import { NgModule } from "@angular/core";
import { NavbarComponent } from "./nav-bar/navbar/navbar.component";
import { FooterComponent } from "./footer/footer/footer.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { MatModule } from "../mat-module/mat.module";
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { CardComponent } from './card-product/card/card.component';


@NgModule({
    declarations:[
        NavbarComponent,
        FooterComponent,
        AdminNavbarComponent,
        CardComponent,


    ],
    imports:[
        CommonModule,
        RouterModule,
        FormsModule,
        MatModule,
    ],
    exports:[
        NavbarComponent,
        FooterComponent,
        AdminNavbarComponent

    ],
})

export class SharedModule { }