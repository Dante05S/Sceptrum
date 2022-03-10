import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsComponent } from './restaurants.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { GlobalComponentsModule } from 'src/app/global-components/global-components.module';



@NgModule({
  declarations: [
    RestaurantComponent,
    RestaurantsComponent

  ],
  imports: [
    CommonModule,
    GlobalComponentsModule
  ],
  exports: [
    RestaurantsComponent
  ]

})
export class RestaurantsModule { }
