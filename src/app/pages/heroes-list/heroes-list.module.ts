import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeroesListPageRoutingModule } from './heroes-list-routing.module';

import { HeroesListPage } from './heroes-list.page';
import { MarvelService } from 'src/app/services/marvel.service';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeroesListPageRoutingModule,
    TranslateModule
  ],
  declarations: [HeroesListPage],
  providers:[MarvelService]
})
export class HeroesListPageModule {}
