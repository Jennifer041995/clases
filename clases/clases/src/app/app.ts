import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados';
import { Parcial1 } from "./parcial_1/parcial_1-";

@Component({
  selector: 'app-root',
  imports: [EmpleadosComponent, Parcial1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prueba');
  alumno: string = "Jennifer";
  edad: number = 30;
}