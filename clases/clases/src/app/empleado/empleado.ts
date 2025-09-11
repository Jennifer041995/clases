import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleado',
  imports: [FormsModule],
  templateUrl: './empleado.html',
  styleUrl: './empleado.css'
})
export class Empleado {
  nombre = "Juan";
  apellido = "Pérez";
  edad = 15;
  empresa = "NEVERIA";
  habilitar_input_property = false;
  usuario_registrado_property = false;
  texto_registro = "No hay nadie registrado";
  dato = "";
  color ="background-color: red;";
  mensaje = "";
  estadoCheckbox: boolean = false;
  n1: number = 0;
  n2: number = 0;
  operador: string = "+";
  resultado: number = 0;
  color_boton = "background: blue; color: white";
  color_div = "background: red; color: white";
  estado_juego: string = "";

  constructor(){}

  getEdad(){
    return this.edad;
  }

  llamar_empresa(empresa: string){
    
  }

  cambiar_registro(){
    this.usuario_registrado_property = !this.usuario_registrado_property;
    //this.set_usuario_registrado();
  }

  set_usuario_registrado(event: Event){
    //alert(event.target);
    //console.log(event);
    if((<HTMLInputElement>event.target).value=="si"){
      this.texto_registro = "El usuario se acaba de registrar";
    }else{
      this.texto_registro = "No hay nadie registrado";
    }
    /*if(!this.usuario_registrado_property){
      //alert(this.usuario_registrado_property);
      //alert("El usuario salió de la sesión")
      this.texto_registro = "No hay nadie registrado";
    }else{
      //alert("El usuario  se ha registrado");
      //alert(this.usuario_registrado_property);
      this.texto_registro = "Usuario en línea";
    }*/
  }

  presionar(){
    console.log("Boton presionado");
  }

  cambiar_desde_input(event: Event){
    this.dato = (event.target as HTMLInputElement).value;
  }

  cambiar_empresa(event: Event){
    this.empresa = (<HTMLInputElement>event.target).value;
  }

  lanzar_mensaje(){
    this.mensaje = "Mensaje lanzado";
    //let mensaje = "Hola;"
    alert(this.mensaje);
    this.color = "background-color: green;";
  }

operar(){
    if(this.operador != ""){
      //this.resultado = eval(this.n1 + this.operador + this.n2);
    }else{
      this.resultado = 0;
    }
  }

  cambiar_color(){
    this.color_boton = "background-color: red; color: white";
  }

  restablecer_color(){
    this.color_boton = "background-color: blue; color: white";
  }

  cambiar_estado(event: Event){
    this.estado_juego = "El juego se ha " + (<HTMLInputElement>event.target).value;
  }

}