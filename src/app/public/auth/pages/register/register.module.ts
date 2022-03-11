import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalComponentsModule } from 'src/app/global-components/global-components.module';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    GlobalComponentsModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
