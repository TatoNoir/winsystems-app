import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeroeDetailPageRoutingModule } from './heroe-detail-routing.module';

import { HeroeDetailPage } from './heroe-detail.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeroeDetailPageRoutingModule,
    TranslateModule
  ],
  declarations: [HeroeDetailPage]
})
export class HeroeDetailPageModule {}
