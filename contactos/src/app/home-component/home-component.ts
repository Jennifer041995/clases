import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceContactos } from '../contactos.service';
import { ContactoHijoC } from '../contacto-hijo-c/contacto-hijo-c';
import { Contactos } from '../contactos.model';

@Component({
  selector: 'app-home-component',
  imports: [FormsModule, CommonModule, ContactoHijoC],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent implements OnInit{
  titulo = "Listado de contactos";
  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroContactos: string = "";
  cuadroEmail: string = "";
  cuadroNota: string = "";
  contactos: Contactos[] = [];

  constructor(private ServiceContactos: ServiceContactos) {}

  ngOnInit(): void {
    this.ServiceContactos.obtener_contactos().subscribe(
      (misContactos: Contactos[]) => { 
        console.log(misContactos);
        this.contactos = Object.values(misContactos);
        this.ServiceContactos.set_contactos(this.contactos);
      }
    );
  }

  agregar_contacto(event?: Event){
    if(event) {
      event.preventDefault();
    }
    if(this.cuadroNombre.trim() && this.cuadroApellido.trim() && this.cuadroContactos.trim()) {
      let miContacto = new Contactos ("", this.cuadroNombre, this.cuadroApellido, this.cuadroContactos, this.cuadroEmail, this.cuadroNota);
      this.ServiceContactos.agregar_contacto(miContacto);
      this.contactos.push(miContacto);
      this.limpiarFormulario();
    }
  }

  limpiarFormulario() {
    this.cuadroNombre = "";
    this.cuadroApellido = "";
    this.cuadroContactos = "";
    this.cuadroEmail = "";
    this.cuadroNota = "";
  }
}
