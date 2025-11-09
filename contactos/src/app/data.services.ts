import { Injectable } from "@angular/core";
import { Contactos } from "./contactos.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private httpClient: HttpClient) { }

  guardar_contactos(contactos: Contactos[]) {
     this.httpClient.post('https://crudcontactos-9d329-default-rtdb.firebaseio.com/datos.json', contactos).subscribe(
       response => {
          console.log("Se han guardado los empleados: " + response);
      },
        error => console.log("Error al guardar empleados: " + error)
      );
  }

  cargar_contactos() {
    return this.httpClient.get('https://crudcontactos-9d329-default-rtdb.firebaseio.com/datos.json');
  }

  actualizar_contacto(indice: number, contacto: Contactos) {
    let url = 'https://crudcontactos-9d329-default-rtdb.firebaseio.com/datos/' + indice + '.json';
    return this.httpClient.put(url, contacto).subscribe(
      response => console.log("Se ha actualizado el contacto: " + response),
      error => console.log("Error al actualizar contacto: " + error)
    );
  }
}
