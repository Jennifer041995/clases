import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  imports: [],
  templateUrl: './empleado.html',
  styleUrl: './empleado.css'
})
export class Empleado {
  nombre = "Juan";
  apellido = "Pérez";
  edad = 28;
  empresa = "UCAD";

  constructor(){}

  getEdad(){
    return this.edad;
  }
  llamar_empresa(empresa: string) {
    
  }
  }
