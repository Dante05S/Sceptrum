import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavReturnComponent} from './nav-return/nav-return.component';
import { NavFirstComponent } from './nav-first/nav-first.component';
import { NavLastComponent } from './nav-last/nav-last.component';
import { FooterComponent } from './footer/footer.component';
import { NavAccountComponent } from './nav-account/nav-account.component';
import { PopUpConfirmComponent } from './root-pop-ups/components/pop-up-confirm/pop-up-confirm.component';


@NgModule({
  declarations: [NavReturnComponent, NavFirstComponent, NavLastComponent, FooterComponent, NavAccountComponent,PopUpConfirmComponent],
  imports: [
    CommonModule,
  ],
  exports: [NavReturnComponent, NavFirstComponent, NavLastComponent, FooterComponent, NavAccountComponent,PopUpConfirmComponent]
})
export class GlobalComponentsModule { }
