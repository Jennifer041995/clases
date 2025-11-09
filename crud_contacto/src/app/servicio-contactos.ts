import { Injectable } from "@angular/core";
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ServicioContacto {
  muestra_mensaje(mensaje: string, tipo: 'success' | 'error' | 'info' | 'warning' = 'info') {
    Swal.fire({
      title: tipo === 'success' ? '¡Éxito!' : tipo === 'error' ? 'Error' : 'Información',
      text: mensaje,
      icon: tipo,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: tipo === 'success' ? '#28a745' : tipo === 'error' ? '#dc3545' : '#007bff'
    });
  }

  confirmar(mensaje: string): Promise<boolean> {
    return Swal.fire({
      title: '¿Estás seguro?',
      text: mensaje,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Sí, continuar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      return result.isConfirmed;
    });
  }
}