import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Contactos } from '../contactos.model';
import { ServiceContactos } from '../crud_contactos.service';
import { ContactoHijoC } from '../contacto-hijo-c/contacto-hijo-c';

@Component({
  selector: 'app-home-component',
  imports: [FormsModule, CommonModule, RouterModule, ContactoHijoC],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent implements OnInit {
  titulo = "Listado de Contactos";
  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroTelefono: string = "";
  contactos: Contactos[] = [];
  cuadroEmail: any;
  cuadroNota: any;
  
  constructor(private contactosService: ServiceContactos) {}

  ngOnInit(): void {
    this.contactosService.obtener_contactos_db().subscribe(
      (misContactos: any) => {
        if (misContactos) {
          // Convertir el objeto de Firebase en un array y filtrar contactos válidos
          let contactosArray: Contactos[] = Object.values(misContactos);
          contactosArray = contactosArray.filter(contacto => contacto && contacto.id);
          // Eliminar duplicados por ID
          contactosArray = contactosArray.filter((contacto, index, self) => 
            index === self.findIndex(c => c.id === contacto.id)
          );
          this.contactos = contactosArray;
          this.contactosService.set_contactos(this.contactos);
          console.log("Contactos cargados en home:", this.contactos.length);
        } else {
          this.contactos = [];
          console.log("No hay contactos en la base de datos");
        }
      },
      (error: any) => {
        console.log("Error al cargar contactos: " + error);
        this.contactos = [];
      }
    );
  }

  agregar_contacto() {
    if (this.cuadroNombre.trim() && this.cuadroApellido.trim() && this.cuadroTelefono.trim()) {
      let miContacto = new Contactos("", this.cuadroNombre, this.cuadroApellido, this.cuadroTelefono);
      // Generar ID único usando timestamp + número aleatorio
      miContacto.id = Date.now().toString() + '_' + Math.random().toString(36).substr(2, 9);
      
      // Guardar en Firebase - el servicio maneja el array local
      this.contactosService.agregar_contacto(miContacto);
      
      // Limpiar campos después de agregar
      this.cuadroNombre = "";
      this.cuadroApellido = "";
      this.cuadroTelefono = "";
      
      // Recargar contactos desde Firebase para sincronizar y evitar duplicados
      setTimeout(() => {
        this.contactosService.obtener_contactos_db().subscribe(
          (misContactos: any) => {
            if (misContactos) {
              // Convertir el objeto de Firebase en un array y filtrar contactos válidos
              let contactosArray: Contactos[] = Object.values(misContactos);
              contactosArray = contactosArray.filter(contacto => contacto && contacto.id);
              // Eliminar duplicados por ID
              contactosArray = contactosArray.filter((contacto, index, self) => 
                index === self.findIndex(c => c.id === contacto.id)
              );
              this.contactos = contactosArray;
              this.contactosService.set_contactos(this.contactos);
            }
          },
          (error: any) => {
            console.log("Error al recargar contactos: " + error);
          }
        );
      }, 800);
    }
  }
}
