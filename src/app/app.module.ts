import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatModule } from './mat-module/mat.module';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login/login.component';
import { StoreComponent } from './store/store/store.component';
import { MacComponent } from './mac/mac/mac.component';
import { IpadComponent } from './ipad/ipad/ipad.component';
import { IphoneComponent } from './iphone/iphone/iphone.component';
import { SupportComponent } from './support/support/support.component';
import { BagComponent } from './bag/bag/bag.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    LoginComponent,
    StoreComponent,
    StoreComponent,
    MacComponent,
    IpadComponent,
    IphoneComponent,
    SupportComponent,
    BagComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    MatModule,
    ToastrModule.forRoot({
      timeOut: 2000,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
