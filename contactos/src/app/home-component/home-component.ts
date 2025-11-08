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
  cuadroContactos: number = 0;
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

  agregar_contacto(){
    let miContacto = new Contactos ("", this.cuadroNombre, this.cuadroApellido, String(this.cuadroContactos));
    this.ServiceContactos.agregar_contacto(miContacto)
  }
}
