import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterBusinessComponent} from './register-business.component'
const routes: Routes =
[
  {
    path: '',
    component: RegisterBusinessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterBusinessRoutingModule { }
