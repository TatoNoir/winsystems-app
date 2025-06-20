import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroeDetailPage } from './heroe-detail.page';

const routes: Routes = [
  {
    path: '',
    component: HeroeDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroeDetailPageRoutingModule {}
