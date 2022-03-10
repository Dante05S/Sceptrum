import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GlobalComponentsModule} from '../../../global-components/global-components.module';
import {RootPopUpsModule} from './components/root-pop-ups/root-pop-ups.module';
import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { AddressComponent } from './components/address/address.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PaymentComponent } from './components/payment/payment.component';
import { TipComponent } from './components/tip/tip.component';
import { ResumeComponent } from './components/resume/resume.component';
import { BtnOrderComponent } from './components/btn-order/btn-order.component';


@NgModule({
  declarations: [
    OrderComponent,
    AddressComponent,
    OrdersComponent,
    PaymentComponent,
    TipComponent,
    ResumeComponent,
    BtnOrderComponent
  ],
  imports: [
    CommonModule,
    GlobalComponentsModule,
    RootPopUpsModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
