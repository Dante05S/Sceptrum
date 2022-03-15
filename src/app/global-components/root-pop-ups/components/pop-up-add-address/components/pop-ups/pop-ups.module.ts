import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopUpsComponent } from './pop-ups.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';



@NgModule({
  declarations: [
    PopUpsComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[PopUpsComponent]
})
export class PopUpsModule { }
