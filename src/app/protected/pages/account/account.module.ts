import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootPopUpsModule } from 'src/app/global-components/root-pop-ups/root-pop-ups.module';
import {GlobalComponentsModule} from '../../../global-components/global-components.module';
import { LastOrdersModule } from './components/user/pages/last-orders/last-orders.module';
import { ResumeOrderModule } from './components/user/pages/resume-order/resume-order.module';
import { MenuModule } from './components/company/pages/menu/menu.module';
import { AddProductModule } from './components/company/pages/add-product/add-product.module';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { SideBarComponent } from './components/user/side-bar/side-bar.component';
import { SideBarCompanyComponent } from './components/company/side-bar-company/side-bar-company.component';
import { ProfileCompanyComponent } from './components/company/pages/profile-company/profile-company.component';

@NgModule({
  declarations: [
    AccountComponent,
    SideBarComponent,
    SideBarCompanyComponent,
    ProfileCompanyComponent,
  ],
  imports: [
    CommonModule,
    RootPopUpsModule,
    GlobalComponentsModule,
    LastOrdersModule,
    ResumeOrderModule,
    MenuModule,
    AddProductModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
