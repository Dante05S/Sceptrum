import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopUpPaymentModule } from './components/pop-up-payment/pop-up-payment.module';
import { RootPopUpsComponent } from './root-pop-ups.component';
import { PopUpAddressComponent } from './components/pop-up-address/pop-up-address.component';


@NgModule({
  declarations: [
    RootPopUpsComponent,
    PopUpAddressComponent,
  ],
  imports: [
    CommonModule,
    PopUpPaymentModule
  ],
  exports:[RootPopUpsComponent]
})
export class RootPopUpsModule { }
