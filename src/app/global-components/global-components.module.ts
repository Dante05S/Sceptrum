import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavReturnComponent} from './nav-return/nav-return.component';
import { NavFirstComponent } from './nav-first/nav-first.component';
import { NavLastComponent } from './nav-last/nav-last.component';
import { FooterComponent } from './footer/footer.component';
import { NavAccountComponent } from './nav-account/nav-account.component';


@NgModule({
  declarations: [NavReturnComponent, NavFirstComponent, NavLastComponent, FooterComponent, NavAccountComponent],
  imports: [
    CommonModule,
  ],
  exports: [NavReturnComponent, NavFirstComponent, NavLastComponent, FooterComponent, NavAccountComponent]
})
export class GlobalComponentsModule { }
