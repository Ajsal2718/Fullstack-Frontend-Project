import { NgModule } from "@angular/core";
import { MacProductsComponent } from "./mac-products/mac-products.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { MatModule } from "../mat-module/mat.module";
import { ViewProductComponent } from './view-product/view-product.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        MacProductsComponent,
        ViewProductComponent
    ],
    exports: [
        MacProductsComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        MatModule,
        SharedModule
    ]
})

export class FeatursModule { }