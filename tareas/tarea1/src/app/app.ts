import { Component } from '@angular/core';

import { MadreComponent } from './madre/madre';
import { HijaComponent } from './hija/hija';
import { Nieto } from './nieto/nieto';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MadreComponent, HijaComponent, Nieto],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title(): string {
    return 'tarea1';
  }
  madre: string = "Norma";
  madreApellido: string = "Salinas";
  madreEdad: number = 50;
  hija: string = "Jennifer";
  hijaApellido: string = "Salinas";
  hijaEdad: number = 30;
  nietaNombre: string = "Aruna";
  nietaApellido: string = "Salinas";
  nietaEdad: number = 0;
  datosCompletos(): string {
    return `El nombre de la madre es: ${this.madre} ${this.madreApellido}, de edad de: ${this.madreEdad}
    \nEl nombre de la hija es: ${this.hija} ${this.hijaApellido}, de edad de: ${this.hijaEdad}
    \nEl nombre de la nieta es: ${this.nietaNombre} ${this.nietaApellido}, de edad de: ${this.nietaEdad}`;
  }
}
