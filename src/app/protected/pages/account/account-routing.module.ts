import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { ProfileComponent } from './components/user/pages/profile/profile.component';
import { LastOrdersComponent } from './components/user/pages/last-orders/last-orders.component';
import { ResumeOrderComponent } from './components/user/pages/resume-order/resume-order.component';
import { ProfileCompanyComponent } from './components/company/pages/profile-company/profile-company.component';
import { MenuComponent } from './components/company/pages/menu/menu.component';
import { AddProductComponent } from './components/company/pages/add-product/add-product.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children:[
      {path: 'profile-user',component: ProfileComponent},
      {path: 'orders',component:LastOrdersComponent},
      {path: 'orders/:id',component:ResumeOrderComponent},
      {path: 'profile-company',component:ProfileCompanyComponent},
      {path: 'menu', component:MenuComponent},
      {path: 'menu/add-product', component:AddProductComponent},
      {path: '**', redirectTo:'profile-company'}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
