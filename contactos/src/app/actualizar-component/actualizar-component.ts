import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contactos } from '../contactos.model';
import { ServiceContactos } from '../contactos.service';

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
    this.indice = this.route.snapshot.params["id"];
    this.contacto = this.ServiceContactos.encontrar_contacto(this.indice);
    this.accion = parseInt(this.route.snapshot.queryParams['accion']);
  }

  actualizarContacto() {
    if (this.accion == 1) {
      //trim - es una función que se utiliza para eliminar los espacios en blanco al principio y al final de una cadena de texto
      if (this.contacto.nombre.trim() && this.contacto.apellido.trim() && this.contacto.telefono.trim() && this.validarEmail()) {
        this.ServiceContactos.actualizar_contacto(this.indice, this.contacto);
        this.router.navigate(['']);
      }
    } else {
      this.ServiceContactos.eliminar_contacto(this.indice);
      this.router.navigate(['']);
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
