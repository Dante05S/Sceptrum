import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopUpDetailComponent } from './pop-up-detail.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { SubTotalComponent } from './components/sub-total/sub-total.component';
import { DiscountsComponent } from './components/discounts/discounts.component';
import { TipComponent } from './components/tip/tip.component';
import { TotalComponent } from './components/total/total.component';


@NgModule({
  declarations: [PopUpDetailComponent, RestaurantComponent, SubTotalComponent, DiscountsComponent, TipComponent, TotalComponent],
  imports: [
    CommonModule
  ],
  exports:[PopUpDetailComponent]
})
export class PopUpDetailModule { }
