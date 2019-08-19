import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: any = [];
  selectedHero: Hero;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    console.log('selected hero', this.selectedHero);
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((res : any[])=>{
      console.log(res);
      this.heroes = res;
    });
  }




}
