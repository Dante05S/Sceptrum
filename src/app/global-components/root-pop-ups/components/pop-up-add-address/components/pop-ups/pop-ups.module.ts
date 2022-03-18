import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopUpsComponent } from './pop-ups.component';
import { EditComponent } from './edit/edit.component';
import { GlobalComponentsModule } from 'src/app/global-components/global-components.module';



@NgModule({
  declarations: [
    PopUpsComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    GlobalComponentsModule
  ],
  exports:[PopUpsComponent]
})
export class PopUpsModule { }
