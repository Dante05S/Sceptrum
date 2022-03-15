import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopUpsModule } from './components/pop-ups/pop-ups.module';
import { PopUpAddAddressComponent } from './pop-up-add-address.component';



@NgModule({
  declarations: [
    PopUpAddAddressComponent
  ],
  imports: [
    CommonModule,
    PopUpsModule
  ],
  exports:[PopUpAddAddressComponent]
})
export class PopUpAddAddressModule { }
