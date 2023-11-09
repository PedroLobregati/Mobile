import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreedDetailsPageRoutingModule } from './breed-details-routing.module';

import { BreedDetailsPage } from './breed-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreedDetailsPageRoutingModule
  ],
  declarations: [BreedDetailsPage]
})
export class BreedDetailsPageModule {}
