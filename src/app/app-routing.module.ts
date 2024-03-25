import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { StoreComponent } from './store/store/store.component';
import { MacComponent } from './mac/mac/mac.component';
import { IpadComponent } from './ipad/ipad/ipad.component';
import { IphoneComponent } from './iphone/iphone/iphone.component';
import { SupportComponent } from './support/support/support.component';
import { BagComponent } from './bag/bag/bag.component';
import { OtpComponent } from './otp/otp/otp.component';
import { MacProductsComponent } from './featurs/mac-products/mac-products.component';
import { ViewProductComponent } from './featurs/view-product/view-product.component';
import { IphoneProductComponent } from './featurs/iphone-product/iphone-product.component';
import { IpadProductComponent } from './featurs/ipad-product/ipad-product.component';
import { WatchProductComponent } from './featurs/watch-product/watch-product.component';
import { AirpodProductComponent } from './featurs/airpod-product/airpod-product.component';
import { CartPageComponent } from './featurs/cart-page/cart-page.component';
import { authGuard } from './core/guards/auth-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'store',component:StoreComponent},
  {path:'mac',component:MacComponent},
  {path:'ipad',component:IpadComponent},
  {path:'iphone',component:IphoneComponent},
  {path:'support',component:SupportComponent},
  {path:'otp',component:OtpComponent},
  {path:'signup', component: SignUpComponent},
  {path:'login',component:LoginComponent},
  {path:"product/:id",component:ViewProductComponent,canActivate:[]} ,
  {path:'mac-product',component:MacProductsComponent},
  {path:'iphone-product',component:IphoneProductComponent},
  {path:'ipad-product',component:IpadProductComponent},
  {path:'watch-product',component:WatchProductComponent},
  {path:'airpod',component:AirpodProductComponent},
  {path:'cart',component:CartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
