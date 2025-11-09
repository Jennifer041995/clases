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
  contactoId: string = "";
  contacto: Contactos = new Contactos("", "", "", "", "", "");
  accion: any = 0;

  constructor(private route: ActivatedRoute, private router: Router, private ServiceContactos: ServiceContactos) {}

  ngOnInit(): void {
    this.contactoId = this.route.snapshot.params["id"];
    // Buscar contacto por ID
    const contactoEncontrado = this.ServiceContactos.encontrar_contacto_por_id(this.contactoId);
    if (contactoEncontrado) {
      this.contacto = { ...contactoEncontrado }; // Crear una copia para no modificar el original directamente
    }
    this.accion = parseInt(this.route.snapshot.queryParams['accion']);
  }

  actualizarContacto() {
    if (this.accion == 1) {
      //trim - es una función que se utiliza para eliminar los espacios en blanco al principio y al final de una cadena de texto
      if (this.contacto.nombre.trim() && this.contacto.apellido.trim() && this.contacto.telefono.trim() && this.validarEmail()) {
        // Asegurar que el ID se mantenga
        this.contacto.id = this.contactoId;
        this.ServiceContactos.actualizar_contacto_por_id(this.contacto);
        this.router.navigate(['/lista']);
      }
    } else {
      this.ServiceContactos.eliminar_contacto_por_id(this.contactoId);
      this.router.navigate(['/lista']);
    }
  }

  validarEmail(): boolean {
    // regex - es una secuencia de caracteres que define un patrón para buscar, validar, reemplazar o manipular texto.
    // /^[^\s@]+@[^\s@]+\.[^\s@]+$/ es una validación que un campo de texto tenga el formato de una dirección de correo electrónico.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !this.contacto.email || emailRegex.test(this.contacto.email);
  }

  volverContactos() {
    this.router.navigate(['/lista']);
  }
}
