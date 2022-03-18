import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalComponentsModule } from 'src/app/global-components/global-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PopUpAddOptionComponent } from './pop-up-add-option.component';



@NgModule({
  declarations: [
    PopUpAddOptionComponent
  ],
  imports: [
    CommonModule,
    GlobalComponentsModule,
    ReactiveFormsModule
  ],
  exports:[PopUpAddOptionComponent]
})
export class PopUpAddOptionModule { }
