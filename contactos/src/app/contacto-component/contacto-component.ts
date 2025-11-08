import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Contactos } from '../contactos.model';
import { ServiceContactos } from '../contactos.service';

@Component({
  selector: 'app-contacto-component',
  imports: [FormsModule],
  templateUrl: './contacto-component.html',
  styleUrl: './contacto-component.css',
})
export class ContactoComponent {
  contacto: Contactos = new Contactos("", "", "", "", "", "");

  constructor(private router: Router, private ServiceContactos: ServiceContactos) {}

  agregarContacto() {
    if (this.contacto.nombre.trim() && this.contacto.apellido.trim() && this.contacto.telefono.trim() && this.validarEmail()) {
      this.contacto.id = Date.now().toString();
      this.ServiceContactos.agregar_contacto(this.contacto);
      this.contacto = new Contactos("", "", "", "", "", "");
      this.router.navigate(['']);
    }
  }

  validarEmail(): boolean {
    //regex - es una secuencia de caracteres que define un patrón para buscar, validar, reemplazar y manipular texto
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !this.contacto.email || emailRegex.test(this.contacto.email);
  }

  volverContactos() {
    this.router.navigate(['/lista']);
  }
}
