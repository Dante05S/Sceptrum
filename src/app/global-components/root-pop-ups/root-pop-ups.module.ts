import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopUpPaymentModule } from './components/pop-up-payment/pop-up-payment.module';
import { PopUpAddAddressModule } from './components/pop-up-add-address/pop-up-add-address.module';
import { PopUpDetailModule } from './components/pop-up-detail/pop-up-detail.module';
import { PopUpAddSectionModule } from './components/pop-up-add-section/pop-up-add-section.module';
import { PopUpAddExtraModule } from './components/pop-up-add-extra/pop-up-add-extra.module';
import { PopUpAddOptionModule } from './components/pop-up-add-option/pop-up-add-option.module';
import { RootPopUpsComponent } from './root-pop-ups.component';
import { PopUpAddressComponent } from './components/pop-up-address/pop-up-address.component';
import {PopUpTipComponent} from './components/pop-up-tip/pop-up-tip.component';
import { PopUpNameComponent } from './components/pop-up-name/pop-up-name.component';

@NgModule({
  declarations: [
    RootPopUpsComponent,
    PopUpAddressComponent,
    PopUpTipComponent,
    PopUpNameComponent,
  ],
  imports: [
    CommonModule,
    PopUpPaymentModule,
    PopUpAddAddressModule,
    PopUpDetailModule,
    PopUpAddSectionModule,
    PopUpAddExtraModule,
    PopUpAddOptionModule
  ],
  exports:[RootPopUpsComponent]
})
export class RootPopUpsModule { }
