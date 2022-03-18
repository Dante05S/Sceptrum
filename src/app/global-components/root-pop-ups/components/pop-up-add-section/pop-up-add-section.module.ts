import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from './panel/panel.module';
import { PopUpAddSectionComponent } from './pop-up-add-section.component';


@NgModule({
  declarations: [PopUpAddSectionComponent],
  imports: [
    CommonModule,
    PanelModule
  ],
  exports: [PopUpAddSectionComponent]
})
export class PopUpAddSectionModule { }
