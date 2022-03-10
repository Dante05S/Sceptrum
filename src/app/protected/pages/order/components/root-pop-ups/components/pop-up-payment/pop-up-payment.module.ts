import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopUpPaymentComponent } from './pop-up-payment.component';
import { MethodsComponent } from './components/methods/methods.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';


@NgModule({
  declarations: [PopUpPaymentComponent, MethodsComponent, CreditCardComponent],
  imports: [
    CommonModule
  ],
  exports: [PopUpPaymentComponent]
})
export class PopUpPaymentModule { }
