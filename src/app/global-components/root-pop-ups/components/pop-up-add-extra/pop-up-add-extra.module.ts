import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalComponentsModule } from 'src/app/global-components/global-components.module';
import { PopUpAddExtraComponent } from './pop-up-add-extra.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PopUpAddExtraComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GlobalComponentsModule
  ],
  exports:[PopUpAddExtraComponent]
})
export class PopUpAddExtraModule { }
