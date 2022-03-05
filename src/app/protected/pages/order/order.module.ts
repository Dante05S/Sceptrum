import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GlobalComponentsModule} from '../../../global-components/global-components.module';
import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { AddressComponent } from './components/address/address.component';


@NgModule({
  declarations: [
    OrderComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
    GlobalComponentsModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
