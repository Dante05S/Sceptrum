import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoProductComponent } from './info-product.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { ExtraModule } from './components/extra/extra.module';



@NgModule({
  declarations: [InfoProductComponent, DetailProductComponent],
  imports: [
    CommonModule,
    ExtraModule
  ],
  exports:[InfoProductComponent]
})
export class InfoProductModule { }
