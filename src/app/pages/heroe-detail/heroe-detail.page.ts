import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.page.html',
  styleUrls: ['./heroe-detail.page.scss'],
  standalone: false
})
export class HeroeDetailPage implements OnInit {
  hero: any; //TIPAR

  constructor(private router: Router) { }

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    this.hero = nav?.extras?.state?.['hero'];

    console.log("recibido: ", this.hero)

    if (!this.hero) {
      this.router.navigate(['/heroes-list']);
    }
  }

}
