import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home.component'
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
const routes: Routes =
[
  {
    path: '',
    component: HomeComponent
  },

  {path: '', children: [{path: 'empresas', component: RestaurantsComponent },
                          {path: 'empresa', component: RestaurantComponent},
                          {path: '**', redirectTo: 'empresas'}]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
