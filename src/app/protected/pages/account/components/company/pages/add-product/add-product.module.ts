import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoProductModule } from './components/info-product/info-product.module';
import { AddProductComponent } from './add-product.component';




@NgModule({
  declarations: [
    AddProductComponent,
  ],
  imports: [
    CommonModule,
    InfoProductModule
  ],
  exports:[AddProductComponent]
})
export class AddProductModule { }
