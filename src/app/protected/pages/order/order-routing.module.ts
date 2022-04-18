import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VigilantGuard } from 'src/app/guards/vigilant.guard';
import {OrderComponent} from './order.component';

const routes: Routes =
[
  {
    path: '',
    component: OrderComponent,
    canActivate:[VigilantGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
