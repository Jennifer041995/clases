import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  imports: [],
  templateUrl: './empleado.html',
  styleUrl: './empleado.css'
})
export class Empleado {
  nombre = "Juan";
  apellido = "Pérez";
  edad = 28;
  empresa = "UCAD";
  habilitar_input_property = false;
  usuario_registrado_property = false;
  texto_registro = "No hay nadie registrado";

  constructor(){}

  getEdad(){
    return this.edad;
  }
  llamar_empresa(empresa: string) {
    
  }
  cambiar_registro() {
    this.usuario_registrado_property = !this.usuario_registrado_property;
    this.set_usuario_registrado
  }

  set_usuario_registrado() {
    //this.cambiar_registro();
    if(this.usuario_registrado_property) {
      //alert(this.usuario_registrado_property);
     // alert("El usuario está registrado");
     this.texto_registro = "No hay nadie registrado";
    }else {
      //alert("El usuario no está registrado");
      this.texto_registro = "Usuario en linea";
    }
  }
}