import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Contactos } from "./contactos.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  actualizar_contactos: any;

  constructor(private httpClient: HttpClient) {}

  // Guardar contactos (PUT reemplaza el array completo en Firebase)
  guardar_contactos(contactos: Contactos[]) {
    this.httpClient
      .put('https://crudcontact-315c3-default-rtdb.firebaseio.com/datos.json', contactos)
      .subscribe(
        response => console.log("Contactos guardados correctamente:", response),
        error => console.log(" Error al guardar contactos:", error)
      );
  }
 
  // Carga de contactos (GET devuelve observable para que el componente o servicio se suscriba)
  cargar_contactos() {
    return this.httpClient
      .get<Contactos[]>('https://crudcontact-315c3-default-rtdb.firebaseio.com/datos.json');
  }

  // Actualiza el contacto individual (PUT en la posición específica del arreglo)
  actualizar_contacto(indice: number, contacto: Contactos) {
    const url = 'https://crudcontact-315c3-default-rtdb.firebaseio.com/datos/' + indice + '.json';
    this.httpClient
      .put(url, contacto)
      .subscribe(
        response => console.log('Contacto actualizado correctamente:', response),
        error => console.log(' Error al actualizar contacto:', error)
      );
  }
}
