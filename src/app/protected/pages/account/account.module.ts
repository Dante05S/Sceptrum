import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootPopUpsModule } from 'src/app/global-components/root-pop-ups/root-pop-ups.module';
import {GlobalComponentsModule} from '../../../global-components/global-components.module';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [
    AccountComponent,
    SideBarComponent,
  ],
  imports: [
    CommonModule,
    RootPopUpsModule,
    GlobalComponentsModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
