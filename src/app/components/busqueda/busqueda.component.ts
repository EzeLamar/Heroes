import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../Services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})



export class BusquedaComponent implements OnInit {

  heroes: any[] = [];
  termino: string;
  constructor( private _heroesService: HeroesService,
                private activatedRoute: ActivatedRoute ) {
                }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes( params [ 'termino' ]);
      console.log( this.heroes );
    });
  }

}
