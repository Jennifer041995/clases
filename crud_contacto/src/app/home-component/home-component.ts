import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { Contactos } from '../contactos.model';
import { ServiceContactos } from '../crud_contactos.service';
import { ContactoHijoC } from '../contacto-hijo-c/contacto-hijo-c';

@Component({
  selector: 'app-home-component',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent implements OnInit {
  titulo = " Contactos";
  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroTelefono: string = "";
  contactos: Contactos[] = [];
  cuadroEmail: any;
  cuadroNota: any;
  
  constructor(private contactosService: ServiceContactos, private router: Router) {}

  ngOnInit(): void {
    this.contactosService.obtener_contactos_db().subscribe(
      (misContactos: any) => {
        if (misContactos) {
          // Converte el objeto de Firebase en un array y filtrar contactos válidos
          let contactosArray: Contactos[] = Object.values(misContactos);
          contactosArray = contactosArray.filter(contacto => contacto && contacto.id);
          // Elimina duplicados por ID
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
      // Genera un ID único usando timestamp + un número aleatorio
      //substr cadena de texto que devuelve una parte de la cadena 
      //toString convierte un valor u objeto en una cedena de texto
      //Math.random función que genera un número decimal aleatorio entre 0(inclusive) y 1 (exclusive)
      //Date.now devuelve la cantidad de milisegundos transcurridos
      miContacto.id = Date.now().toString() + '_' + Math.random().toString(36).substr(2, 9);

      // Guarda en Firebase - el servicio maneja el array local
      this.contactosService.agregar_contacto(miContacto);

      // Limpia los campos automáticamente después de agregar
      this.cuadroNombre = "";
      this.cuadroApellido = "";
      this.cuadroTelefono = "";
      this.cuadroEmail = "";
      this.cuadroNota = "";

      // Redirige a la pantalla de lista de contactos
      this.router.navigate(['/lista']);

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
                //recurre al array y mantiene solo el primer contacto con un ID único eloimnando los duplicados
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
      }, 1000);
    }
  }
}
