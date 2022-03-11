import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalComponentsModule } from 'src/app/global-components/global-components.module';
import { RegisterBusinessComponent } from './register-business.component';
import { RegisterBusinessRoutingModule } from './register-business-routing.module';



@NgModule({
  declarations: [
    RegisterBusinessComponent
  ],
  imports: [
    CommonModule,
    GlobalComponentsModule,
    RegisterBusinessRoutingModule
  ]
})
export class RegisterBusinessModule { }
