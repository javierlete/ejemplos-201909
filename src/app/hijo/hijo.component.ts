import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('el-que-recibe-el-saludo') persona: Persona = { id: 0, nombre: 'Desconocido' };
  @Output() saludo = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClick(nombre: string) {
    const mensaje = 'Hola, ' + nombre;
    console.log('Se ha pulsado el botón', mensaje);
    this.saludo.emit(mensaje);
  }
}
