import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  titulo = "Registro de Usuarios";
  mensaje = "";
  registrado = false;
  nombre = "";
  apellido = "";

  entradas: any[];

  constructor(){
    this.entradas = [
      {
        titulo: "Python, cada día más presente"
      },
      {
        titulo: "Java, presente en más de 30 años"
      },
      {
        titulo: "JavaScript, cada día más funcional"
      }
    ];
  }

  registrar_usuario(){
    this.mensaje = "Usuario registrado";
    this.registrado = true;
  }
}