import { Component } from '@angular/core';
import { MadreComponent } from "../madre/madre";

@Component({
  selector: 'app-hija',
  standalone: true,
  imports: [],
  templateUrl: './hija.html',
  styleUrls: ['./hija.css']
})
export class HijaComponent {
  hija: string = 'Jennifer';
  hijaApellido: string = 'Salinas';
  hijaEdad: number = 30;

}
