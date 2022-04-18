import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { ProfileComponent } from './components/user/pages/profile/profile.component';
import { LastOrdersComponent } from './components/user/pages/last-orders/last-orders.component';
import { ResumeOrderComponent } from './components/user/pages/resume-order/resume-order.component';
import { ProfileCompanyComponent } from './components/company/pages/profile-company/profile-company.component';
import { MenuComponent } from './components/company/pages/menu/menu.component';
import { AddProductComponent } from './components/company/pages/add-product/add-product.component';
import { VigilantGuard } from 'src/app/guards/vigilant.guard';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children:[
      {path: 'profile-user',component: ProfileComponent,canActivate:[VigilantGuard]},
      {path: 'orders',component:LastOrdersComponent,canActivate:[VigilantGuard]},
      {path: 'orders/:id',component:ResumeOrderComponent,canActivate:[VigilantGuard]},
      {path: 'profile-company',component:ProfileCompanyComponent,canActivate:[VigilantGuard]},
      {path: 'menu', component:MenuComponent,canActivate:[VigilantGuard]},
      {path: 'menu/add-product', component:AddProductComponent,canActivate:[VigilantGuard]},
      {path: '**', redirectTo:'profile-company'}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
