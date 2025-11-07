import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ServicioContacto {
  muestra_mensaje(mensaje: string) {
    alert(mensaje);
  }
}