import { Injectable } from "@angular/core";
import { Contactos } from "./contactos.model";
import { DataService } from "./data.services";
import { ServicioContacto } from "./servicio-contactos";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceContactos {
  contactos: Contactos[] = [];

  constructor(
    private dataService: DataService,
    private servicioMensaje: ServicioContacto
  ) {
    // cargar contactos al iniciar el servicio
    this.cargarDesdeDB();
  }

  // Solo muestra mensaje en consola (para depuración)
  muestra_mensaje(mensaje: string) {
    console.log(mensaje);
  }

  // 🔹 Agregar contacto nuevo
  agregar_contacto(contacto: Contactos) {
    this.contactos.push(contacto);

    // Guardar todos los contactos en Firebase
    this.dataService.guardar_contactos(this.contactos);

    // Mostrar mensaje local
    this.servicioMensaje.muestra_mensaje(
      `Contacto agregado: ${contacto.nombre} ${contacto.apellido}`,
      "success"
    );
  }

  // 🔹 Obtener contactos actuales
  obtener_contactos(): Observable<Contactos[]> {
    return of(this.contactos);
  }

  // 🔹 Encontrar un contacto por índice
  encontrar_contacto(indice: number) {
    if (indice >= 0 && indice < this.contactos.length) {
      return this.contactos[indice];
    }
    return new Contactos("", "", "", "", "", "");
  }

  // 🔹 Actualizar un contacto existente
  actualizar_contacto(indice: number, contacto: Contactos) {
    const contactoModificado = this.contactos[indice];
    if (contactoModificado) {
      contactoModificado.nombre = contacto.nombre;
      contactoModificado.apellido = contacto.apellido;
      contactoModificado.telefono = contacto.telefono;
      contactoModificado.email = contacto.email;
      contactoModificado.nota = contacto.nota;

      // Guardar cambios completos en Firebase
      this.dataService.guardar_contactos(this.contactos);

      // Mensaje local
      this.servicioMensaje.muestra_mensaje(
        `Contacto actualizado: ${contacto.nombre} ${contacto.apellido}`,
        "success"
      );
    }
  }

  // 🔹 Eliminar un contacto
  eliminar_contacto(indice: number) {
    if (indice >= 0 && indice < this.contactos.length) {
      this.contactos.splice(indice, 1);

      // Guardar array actualizado en Firebase
      this.dataService.guardar_contactos(this.contactos);

      // Mensaje local
      this.servicioMensaje.muestra_mensaje(
        "Contacto eliminado correctamente",
        "success"
      );
    }
  }

  // 🔹 Cargar desde Firebase
  obtener_contactos_db() {
    return this.dataService.cargar_contactos();
  }

  // 🔹 Establecer el array local
  set_contactos(misContactos: Contactos[]) {
    this.contactos = misContactos || [];
  }

  // 🔹 Inicializar datos desde la base de datos
  cargarDesdeDB() {
    this.obtener_contactos_db().subscribe({
      next: (res: any) => {
        if (res) {
          if (Array.isArray(res)) {
            this.set_contactos(res as Contactos[]);
          } else if (typeof res === "object") {
            const arr: Contactos[] = Object.values(res);
            this.set_contactos(arr);
          } else {
            this.set_contactos([]);
          }
        } else {
          this.set_contactos([]);
        }
      },
      error: (err) => {
        console.error("Error cargando contactos desde DB:", err);
        this.set_contactos([]);
      },
    });
  }
}
