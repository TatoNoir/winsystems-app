import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarvelService } from 'src/app/services/marvel.service';
@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.page.html',
  styleUrls: ['./heroes-list.page.scss'],
  standalone: false
})
export class HeroesListPage implements OnInit {
  heroes: any[] = [];    //falta tipar
  isLoading = true;

  constructor(
    private marvelService: MarvelService,
    private router: Router
  ) { }

  ngOnInit() {
      this.marvelService.getHeroes().subscribe({
      next: (res) => {
        this.heroes = res.data.results;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('💥 Error al traer los héroes:', err);
      }
    });
  }

  openHero(hero: any) {
    this.router.navigate(['/heroe-detail'], {
      state: { hero }
    });
  }

}
