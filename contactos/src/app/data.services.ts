import { Injectable } from "@angular/core";
import { Contactos } from "./contactos.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private httpClient: HttpClient) { }

  guardar_contactos(contactos: Contactos[]): Observable<any> {
    return this.httpClient.put('https://crudcontactos-9d329-default-rtdb.firebaseio.com/datos.json', contactos);
  }

  cargar_contactos(): Observable<any> {
    return this.httpClient.get('https://crudcontactos-9d329-default-rtdb.firebaseio.com/datos.json');
  }

  actualizar_contacto(indice: number, contacto: Contactos): Observable<any> {
    let url = 'https://crudcontactos-9d329-default-rtdb.firebaseio.com/datos/' + indice + '.json';
    return this.httpClient.put(url, contacto);
  }

  eliminar_contacto(indice: number): Observable<any> {
    let url = 'https://crudcontactos-9d329-default-rtdb.firebaseio.com/datos/' + indice + '.json';
    return this.httpClient.delete(url);
  }
}
