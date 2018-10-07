import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  constructor( private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( params => {
      console.log( params['id'] ); // ESE 'ID' ES EL MISMO QUE DEFINIMOS EN EL ARCHIVOS DE RUTA (MIRALO SI NO ESTAS SEGURO)
    } );
  }


}
