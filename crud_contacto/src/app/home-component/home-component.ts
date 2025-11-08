import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contactos } from '../contactos.model';
import { ContactosService } from '../crud_contactos.service';
import { ContactoHijoC } from '../contacto-hijo-c/contacto-hijo-c';

@Component({
  selector: 'app-home-component',
  imports: [FormsModule, CommonModule, ContactoHijoC],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent implements OnInit {
  titulo = "Listado de Contactos";
  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroTelefono: string = "";
  contactos: Contactos[] = [];
  
  constructor(private contactosService: ContactosService) {}

  ngOnInit(): void {
    this.contactosService.obtener_contactos_db().subscribe(
      misContactos => {
        console.log(misContactos);
        this.contactos = Object.values(misContactos);
        this.contactosService.set_contactos(this.contactos);
      }
    );
  }

  agregar_contacto() {
    let miContacto = new Contactos("", this.cuadroNombre, this.cuadroApellido, this.cuadroTelefono);
    this.contactosService.agregar_contacto(miContacto);
  }
}
