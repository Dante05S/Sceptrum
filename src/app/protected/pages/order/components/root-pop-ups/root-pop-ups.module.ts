import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopUpPaymentModule } from './components/pop-up-payment/pop-up-payment.module';
import { PopUpDetailModule } from './components/pop-up-detail/pop-up-detail.module';
import { RootPopUpsComponent } from './root-pop-ups.component';
import { PopUpAddressComponent } from './components/pop-up-address/pop-up-address.component';
import {PopUpTipComponent} from './components/pop-up-tip/pop-up-tip.component';



@NgModule({
  declarations: [
    RootPopUpsComponent,
    PopUpAddressComponent,
    PopUpTipComponent
  ],
  imports: [
    CommonModule,
    PopUpPaymentModule,
    PopUpDetailModule
  ],
  exports:[RootPopUpsComponent]
})
export class RootPopUpsModule { }
