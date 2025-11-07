import { Injectable } from "@angular/core";
import { Contactos } from "./contactos/contactos";
import { DataService } from "./data.services";

@Injectable({
  providedIn: 'root'
})

export class ContactosService {
  contactos: Contactos[] = [];

  constructor(private dataService: DataService) {
  }

  agregar_contacto(contacto: Contactos) {
    this.contactos.push(contacto);
  }

  encontrar_contacto_por_id(id: string): Contactos | undefined {
    return this.contactos.find(contacto => contacto.id === id);
  }

  obtener_contactos() {
    return this.contactos;
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

    this.dataService.actualizar_contacto(indice, contacto);
  }

  eliminar_contacto(indice: number) {
    this.contactos.splice(indice, 1);
  }

  set_contactos(misContactos: Contactos[]) {
    this.contactos = misContactos;
  }
}
