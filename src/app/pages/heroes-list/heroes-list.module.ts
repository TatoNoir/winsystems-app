import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeroesListPageRoutingModule } from './heroes-list-routing.module';

import { HeroesListPage } from './heroes-list.page';
import { MarvelService } from 'src/app/services/marvel.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeroesListPageRoutingModule
  ],
  declarations: [HeroesListPage],
  providers:[MarvelService]
})
export class HeroesListPageModule {}
