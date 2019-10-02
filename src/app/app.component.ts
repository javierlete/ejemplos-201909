import { Component } from '@angular/core';
import { Persona } from './persona';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/es';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'es');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  datos = [
    { id: 1, nombre: 'Javier' },
    { id: 2, nombre: 'Pepe' },
    { id: 3, nombre: 'Juan' }
  ];
  mensaje: string;

  fecha = new Date();

  precio = 12.34;

  porCadaPersona(indice: number, persona: Persona): number {
    // console.log(indice, persona);
    return persona.id;
  }

  onSaludo(mensaje: string) {
    this.mensaje = mensaje;
  }
}
