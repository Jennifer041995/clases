import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Contactos } from '../contactos.model';
import { ServiceContactos } from '../contactos.service';

@Component({
  selector: 'app-lista-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-component.html',
  styleUrl: './lista-component.css',
})
export class ListaComponent implements OnInit {
  contactos: Contactos[] = [];
  contactosFiltrados: Contactos[] = [];
  filtroNombre: string = '';
   
  constructor(private router: Router, private ServiceContactos: ServiceContactos) {}

  ngOnInit(): void {
    this.ServiceContactos.obtener_contactos_db().subscribe(
      (contactos: any) => {
        if (contactos) {
          let contactosArray: Contactos[] = Object.values(contactos);
          this.ServiceContactos.set_contactos(contactosArray);
          this.contactos = contactosArray;
          this.contactosFiltrados = contactosArray;
        } else {
          this.contactos = [];
          this.contactosFiltrados = [];
        }
      },
      error => {
        console.log("Error al cargar contactos: " + error);
        this.contactos = [];
        this.contactosFiltrados = [];
      }
    );
  }

  agregarContacto() {
    this.router.navigate(['/agregar']);
  }

  volverHome() {
    this.router.navigate(['/']);
  }

  editarContacto(indice: number) {
    this.router.navigate(['/actualizar', indice]);
  }

  eliminarContacto(indice: number) {
    if (confirm('¿Estás seguro de que quieres eliminar este contacto?')) {
      this.ServiceContactos.eliminar_contacto(indice);
      this.ServiceContactos.obtener_contactos().subscribe(
        (contactos: Contactos[]) => {
          this.contactos = contactos;
          this.filtrarContactos();
        },
        error => {
          console.error('Error al obtener contactos tras eliminar:', error);
          this.contactos = [];
          this.contactosFiltrados = [];
        }
      );
    }
  }

  filtrarContactos() {
    if (this.filtroNombre.trim()) {
      this.contactosFiltrados = this.contactos.filter(contacto =>
        contacto.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase()) ||
        contacto.apellido.toLowerCase().includes(this.filtroNombre.toLowerCase())
      );
    } else {
      this.contactosFiltrados = this.contactos;
    }
  }
}
