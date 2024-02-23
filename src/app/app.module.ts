import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatModule } from './mat-module/mat.module';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/nav-bar/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { StoreComponent } from './store/store/store.component';
import { MacComponent } from './mac/mac/mac.component';
import { IpadComponent } from './ipad/ipad/ipad.component';
import { IphoneComponent } from './iphone/iphone/iphone.component';
import { SupportComponent } from './support/support/support.component';

@NgModule({
  declarations: [AppComponent, SignUpComponent, NavbarComponent, FooterComponent, HomeComponent, LoginComponent, StoreComponent, StoreComponent, MacComponent, IpadComponent, IphoneComponent, SupportComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatModule,
    ToastrModule.forRoot({
      timeOut: 2000,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
