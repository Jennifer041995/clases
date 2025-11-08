import { Injectable } from "@angular/core";
import { Contactos } from "./contactos.model";
import { DataService } from "./data.services";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ServiceContactos {
  constructor(private dataService: DataService, private servicioMensaje: ServiceContactos) {
    
  }

  contactos: Contactos[] = [];
    muestra_mensaje(mensaje: string){
        console.log(mensaje);
    }

  agregar_contacto(contacto: Contactos) {
    this.contactos.push(contacto);
    this.dataService.guardar_contactos(this.contactos).subscribe(
      response => {
        console.log("Se han guardado los contactos: " + response);
        this.servicioMensaje.muestra_mensaje("Contacto agregado: " + contacto.nombre + " " + contacto.apellido);
      },
    );
  }

  encontrar_contacto_por_id(id: string): Contactos | undefined {
    return this.contactos.find(contacto => contacto.id === id);
  }

  obtener_contactos(): Observable<Contactos[]> {
    return of(this.contactos); 
  }

  encontrar_contacto(indice: number) {
    let contacto: Contactos = this.contactos[indice];
    return contacto;
  }

  actualizar_contacto(indice: number, contacto: Contactos) {
    let contactoModificado = this.contactos[indice];
    contactoModificado.nombre = contacto.nombre;
    contactoModificado.apellido = contacto.apellido;
    contactoModificado.telefono = contacto.telefono;
    contactoModificado.email = contacto.email;
    contactoModificado.nota = contacto.nota;

    this.dataService.actualizar_contacto(indice, contacto).subscribe(
      response => {
        console.log("Se ha actualizado el contacto: " + response);
        this.servicioMensaje.muestra_mensaje("Contacto actualizado: " + contacto.nombre + " " + contacto.apellido);
      },
      (error: string) => {
        console.log("Error al actualizar contacto: " + error);
        this.servicioMensaje.muestra_mensaje("Error al actualizar contacto: " + error);
      }
    );
  }

  eliminar_contacto(indice: number) {
    this.contactos.splice(indice, 1);
    this.dataService.guardar_contactos(this.contactos).subscribe(
      response => {
        console.log("Se han guardado los contactos después de eliminar: " + response);
        this.servicioMensaje.muestra_mensaje("Contacto eliminado");
      },
      (error: string) => {
        console.log("Error al guardar contactos después de eliminar: " + error);
        this.servicioMensaje.muestra_mensaje("Error al eliminar contacto: " + error);
      }
    );
  }

  obtener_contactos_db() {
    return this.dataService.cargar_contactos();
  }

  set_contactos(misContactos: Contactos[]) {
    this.contactos = misContactos;
  }
}
