import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados';

@Component({
  selector: 'app-root',
  imports: [EmpleadosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prueba');
  alumno: string = "Jennifer";
  edad: number = 30;
}