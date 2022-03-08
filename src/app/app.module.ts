import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './protected/pages/home/home.component';
import { LoginComponent } from './protected/pages/login/login.component';
import { RegisterComponent } from './protected/pages/register/register.component';
import { RegisterBusinessComponent } from './protected/pages/register-business/register-business.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RegisterBusinessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
