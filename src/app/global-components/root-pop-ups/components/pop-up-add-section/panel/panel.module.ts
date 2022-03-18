import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { GlobalComponentsModule } from 'src/app/global-components/global-components.module';


@NgModule({
  declarations: [PanelComponent],
  imports: [
    CommonModule,
    GlobalComponentsModule
  ],
  exports: [PanelComponent]
})
export class PanelModule { }
