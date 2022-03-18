import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtraComponent } from './extra.component';
import { ExtraTemplateComponent } from './components/extra-template/extra-template.component';
import { OptionTemplateComponent } from './components/option-template/option-template.component';


@NgModule({
  declarations: [ExtraComponent,ExtraTemplateComponent, OptionTemplateComponent],
  imports: [
    CommonModule
  ],
  exports: [ExtraComponent]
})
export class ExtraModule { }
