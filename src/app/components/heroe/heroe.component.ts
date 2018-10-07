import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HeroesService } from '../Services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};

  constructor( private activatedRoute: ActivatedRoute,
                private _heroesService: HeroesService) {
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe( params['id']);
      // ESE 'ID' ES EL MISMO QUE DEFINIMOS EN EL ARCHIVOS DE RUTA (MIRALO SI NO ESTAS SEGURO)
    } );
  }


}
