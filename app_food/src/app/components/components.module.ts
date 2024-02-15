import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { IonicModule } from '@ionic/angular';
import { LoadingRestaurantComponent } from './loading-restaurant/loading-restaurant.component';
import { EmptyScreenComponent } from './empty-screen/empty-screen.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { LoadingPurchasesComponent } from './loading-purchases/loading-purchases.component';
import { EmptyPurchasesComponent } from './empty-purchases/empty-purchases.component';



@NgModule({
  declarations: [RestaurantComponent, LoadingRestaurantComponent, EmptyScreenComponent, PurchasesComponent, LoadingPurchasesComponent, EmptyPurchasesComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [RestaurantComponent, LoadingRestaurantComponent, EmptyScreenComponent, PurchasesComponent, LoadingPurchasesComponent, EmptyPurchasesComponent]
})
export class ComponentsModule { }
