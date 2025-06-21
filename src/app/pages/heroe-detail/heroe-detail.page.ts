import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from 'src/app/models/hero.model';
@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.page.html',
  styleUrls: ['./heroe-detail.page.scss'],
  standalone: false
})
export class HeroeDetailPage implements OnInit {
  hero: Hero| null = null;;

  constructor(private router: Router) { }

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    this.hero = nav?.extras?.state?.['hero'];

    if (!this.hero) {
      this.router.navigate(['/heroes-list']);
    }
  }

}
