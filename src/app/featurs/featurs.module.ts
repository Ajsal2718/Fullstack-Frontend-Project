import { NgModule } from "@angular/core";
import { MacProductsComponent } from "./mac-products/mac-products.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { MatModule } from "../mat-module/mat.module";
import { ViewProductComponent } from './view-product/view-product.component';
import { SharedModule } from "../shared/shared.module";
import { IphoneProductComponent } from './iphone-product/iphone-product.component';
import { IpadProductComponent } from './ipad-product/ipad-product.component';
import { WatchProductComponent } from './watch-product/watch-product.component';
import { AirpodProductComponent } from './airpod-product/airpod-product.component';



@NgModule({
    declarations: [
        MacProductsComponent,
        ViewProductComponent,
        IphoneProductComponent,
        IpadProductComponent,
        WatchProductComponent,
        AirpodProductComponent,
    ],
    exports: [
        MacProductsComponent,
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