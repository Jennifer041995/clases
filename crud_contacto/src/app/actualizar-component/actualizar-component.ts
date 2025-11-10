import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contactos } from '../contactos.model';
import { ServiceContactos } from '../crud_contactos.service';

@Component({
  selector: 'app-actualizar-component',
  imports: [FormsModule, CommonModule,],
  templateUrl: './actualizar-component.html',
  styleUrl: './actualizar-component.css',
})
export class ActualizarComponent implements OnInit {
  indice: number = 0;
  contacto: Contactos = new Contactos("", "", "", "", "", "");
  accion: any = 0;

  constructor(private route: ActivatedRoute, private router: Router, private ServiceContactos: ServiceContactos) {}

  ngOnInit(): void {
    // parseInt convierte una cadena de texto en un número entero
    this.indice = parseInt(this.route.snapshot.params["indice"]);
    this.accion = parseInt(this.route.snapshot.queryParams['accion']);
    // Cargar el contacto por índice directamente del array local
    this.contacto = this.ServiceContactos.encontrar_contacto(this.indice);
  }

  actualizarContacto() { 
    if (this.accion == 1) {
      //trim es una función que se utiliza para eliminar los espacios en blanco al principio y al final de una cadena de texto
      if (this.contacto.nombre.trim() && this.contacto.apellido.trim() && this.contacto.telefono.trim()) {
        // Actualizar el contacto usando el índice
        this.ServiceContactos.actualizar_contacto(this.indice, this.contacto);
        this.router.navigate(['/lista']);
      }
    } else if (this.accion == 2) {
      // Eliminar el contacto usando el índice
      this.ServiceContactos.eliminar_contacto(this.indice);
      this.router.navigate(['/lista']);
    }
  }

  volverContactos() {
    this.router.navigate(['/lista']);
  }
}
