import { Component } from '@angular/core';
import { Persona } from './persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  datos = [ { id: 1, nombre: 'Javier' }, { id: 2, nombre: 'Pepe'}];

  porCadaPersona(indice: number, persona: Persona): number {
    console.log(indice, persona);
    return persona.id;
  }
}
