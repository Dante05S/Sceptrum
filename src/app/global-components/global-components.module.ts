import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavReturnComponent} from './nav-return/nav-return.component';

@NgModule({
  declarations: [NavReturnComponent],
  imports: [
    CommonModule
  ],
  exports: [NavReturnComponent]
})
export class GlobalComponentsModule { }
