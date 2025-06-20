import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'heroes-list',
    pathMatch: 'full'
  },
  {
    path: 'heroes-list',
    loadChildren: () => import('./pages/heroes-list/heroes-list.module').then( m => m.HeroesListPageModule)
  },
  {
    path: 'heroe-detail',
    loadChildren: () => import('./pages/heroe-detail/heroe-detail.module').then( m => m.HeroeDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
