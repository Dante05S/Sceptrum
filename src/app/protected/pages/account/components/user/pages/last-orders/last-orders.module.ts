import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastOrdersComponent } from './last-orders.component';
import { TemplateOrderComponent } from './template-order/template-order.component';


@NgModule({
  declarations: [LastOrdersComponent, TemplateOrderComponent],
  imports: [
    CommonModule
  ],
  exports: [LastOrdersComponent]
})
export class LastOrdersModule { }
