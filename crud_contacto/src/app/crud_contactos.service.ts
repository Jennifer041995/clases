import { Injectable } from "@angular/core";
import { Contactos } from "./contactos.model";
import { DataService } from "./data.services";
import { ServicioContacto } from "./servicio-contactos";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ServiceContactos {
  constructor(private dataService: DataService, private servicioMensaje: ServicioContacto) {
    
  }

  contactos: Contactos[] = [];
    muestra_mensaje(mensaje: string){
        console.log(mensaje);
    }

  agregar_contacto(contacto: Contactos) {
    const existe = this.contactos.find(c => c.id === contacto.id);
    if (!existe) {
      this.contactos.push(contacto);
      this.servicioMensaje.muestra_mensaje("Contacto agregado: " + contacto.nombre + " " + contacto.apellido, 'success');
    } else {
      console.warn("El contacto con ID", contacto.id, "ya existe en el array local");
    }
  }

  obtener_contactos(): Observable<Contactos[]> {
    return of(this.contactos); 
  }

  encontrar_contacto(indice: number) {
    if (indice >= 0 && indice < this.contactos.length) {
      return this.contactos[indice];
    }
    return new Contactos("", "", "", "", "", "");
  }

  actualizar_contacto(indice: number, contacto: Contactos) {
    let contactoModificado = this.contactos[indice];
    if (contactoModificado) {
      contactoModificado.nombre = contacto.nombre;
      contactoModificado.apellido = contacto.apellido;
      contactoModificado.telefono = contacto.telefono;
      contactoModificado.email = contacto.email;
      contactoModificado.nota = contacto.nota;

      // Actualizar en Firebase usando el ID
      this.servicioMensaje.muestra_mensaje("Contacto actualizado: " + contacto.nombre + " " + contacto.apellido, 'success');
    }
  }

  eliminar_contacto(indice: number) {
    if (indice >= 0 && indice < this.contactos.length) {
      const contactoEliminado = this.contactos[indice];
      // Eliminar de Firebase usando el ID
      if (contactoEliminado && contactoEliminado.id) {
      }
      this.contactos.splice(indice, 1);
      this.servicioMensaje.muestra_mensaje("Contacto eliminado correctamente", 'success');
    }
  }

  obtener_contactos_db() {
    return this.dataService.cargar_contactos();
  }

  set_contactos(misContactos: Contactos[]) {
    this.contactos = misContactos;
  }
}
