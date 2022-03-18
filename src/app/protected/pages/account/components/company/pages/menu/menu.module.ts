import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootPopUpsModule } from 'src/app/global-components/root-pop-ups/root-pop-ups.module';
import { MenuComponent } from './menu.component';
import { ProductTemplateComponent } from './components/product-template/product-template.component';



@NgModule({
  declarations: [
    MenuComponent,
    ProductTemplateComponent
  ],
  imports: [
    CommonModule,
    RootPopUpsModule
  ],
  exports:[MenuComponent]
})
export class MenuModule { }
