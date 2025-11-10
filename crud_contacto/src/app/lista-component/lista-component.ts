import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Contactos } from '../contactos.model';
import { ServiceContactos } from '../crud_contactos.service';
import { ServicioContacto } from '../servicio-contactos';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-component.html',
  styleUrl: './lista-component.css',
})
export class ListaComponent implements OnInit, OnDestroy {
  contactos: Contactos[] = [];
  contactosFiltrados: Contactos[] = [];
  filtroNombre: string = '';
  private routerSubscription?: Subscription;
   
  constructor(private router: Router, private ServiceContactos: ServiceContactos, private servicioMensaje: ServicioContacto) {}

  ngOnInit(): void {
    this.cargarContactos();
    
    // Recargar contactos cuando se navega a esta ruta
    //pipe transfoma datos en planillas de manera decorativa, sin modificar el valor original en el componente
    this.routerSubscription = this.router.events.pipe(
      //verifica si un objeto es una instancia de una clase específica
      filter(event => event instanceof NavigationEnd)
      //detecta cuando se ha completado la navegación a una ruta específica
    ).subscribe((event: NavigationEnd) => {
      //es una propiedad del objeto NavigationEnd que contiene la URL a la que se ha navegado
      if (event.url === '/lista' || event.urlAfterRedirects === '/lista') {
        this.cargarContactos();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  cargarContactos(): void {
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
      (error: any) => {
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
    this.router.navigate(['/editar', indice]);
  }

  eliminarContacto(indice: number) {
    this.servicioMensaje.confirmar('¿Estás seguro de que quieres eliminar este contacto?').then((confirmado) => {
      if (confirmado) {
        this.ServiceContactos.eliminar_contacto(indice);
        // Actualizar la vista inmediatamente eliminando del array local
        this.contactos.splice(indice, 1);
        //splice elimina un elemento de un array en una posición específica
        this.contactosFiltrados.splice(indice, 1);
      }
    });
  }

  filtrarContactos() {
    if (this.filtroNombre.trim()) {
      this.contactosFiltrados = this.contactos.filter(contacto =>
        //ToLowerCase convierte una cadena de texto a minúsculas
        contacto.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase()) ||
        contacto.apellido.toLowerCase().includes(this.filtroNombre.toLowerCase())
      );
    } else {
      this.contactosFiltrados = this.contactos;
    }
  }
}
