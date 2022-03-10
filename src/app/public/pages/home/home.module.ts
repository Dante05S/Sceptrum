import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalComponentsModule } from 'src/app/global-components/global-components.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { RestaurantsModule } from './restaurants/restaurants.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RestaurantsModule,
    HomeRoutingModule,
    GlobalComponentsModule
  ]
})
export class HomeModule { }
