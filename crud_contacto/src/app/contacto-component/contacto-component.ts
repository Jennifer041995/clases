import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contactos } from '../contactos.model';
import { ServiceContactos } from '../crud_contactos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto-component',
  imports: [FormsModule],
  templateUrl: './contacto-component.html',
  styleUrls: ['./contacto-component.css']  // corregido
})
export class ContactoComponent {
  contacto: Contactos = new Contactos("", "", "", "", "", "");

  constructor(private router: Router, private ServiceContactos: ServiceContactos) {}

  agregarContacto() {
    if (this.contacto.nombre.trim() && this.contacto.apellido.trim() && this.contacto.telefono.trim()) {
      this.ServiceContactos.agregar_contacto(this.contacto);
      this.contacto = new Contactos("", "", "", "", "", "");
      this.router.navigate(['']);
    }
  }



  volverContactos() {
    this.router.navigate(['/lista']);
  }
}
