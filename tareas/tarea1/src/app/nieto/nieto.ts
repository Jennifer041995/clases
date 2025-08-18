import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nieto',
  standalone: true,
  imports: [],
  templateUrl: './nieto.html',
  styleUrls: ['./nieto.css']
})
export class Nieto {
  @Input() hija: string = 'Aruna';
  @Input() hijaApellido: string = 'Salinas';
  @Input() hijaEdad: number = 0;
}
