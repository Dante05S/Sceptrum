import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LastOrdersComponent } from './pages/last-orders/last-orders.component';
import { ResumeOrderComponent } from './pages/resume-order/resume-order.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children:[
      {path: 'profile',component: ProfileComponent},
      {path: 'orders',component:LastOrdersComponent},
      {path: 'orders/:id',component:ResumeOrderComponent},
      {path: '**', redirectTo:'profile'}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
