import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeOrderComponent } from './resume-order.component';
import { DetailsComponent } from './components/details/details.component';



@NgModule({
  declarations: [ResumeOrderComponent, DetailsComponent],
  imports: [
    CommonModule
  ],
  exports:[ResumeOrderComponent]
})
export class ResumeOrderModule { }
