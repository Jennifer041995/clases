import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactos',
  imports: [FormsModule, CommonModule], 
  templateUrl: './contactos.html',
  styleUrl: './contactos.css',
})
export class Contactos {
  id? : string;
  nombre: string = "";
  apellido: string = "";
  telefono: string = "";
}
