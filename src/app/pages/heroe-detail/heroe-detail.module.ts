import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeroeDetailPageRoutingModule } from './heroe-detail-routing.module';

import { HeroeDetailPage } from './heroe-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeroeDetailPageRoutingModule
  ],
  declarations: [HeroeDetailPage]
})
export class HeroeDetailPageModule {}
