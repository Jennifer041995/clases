export class Contactos {
    id: string = "";
    nombre: string = "";
    apellido: string = "";
    telefono: string = "";
    email: string = "";
    nota: string = "";

    constructor(id: string, nombre: string, apellido: string, telefono: string, email: string, nota: string){
       this.id = id;
       this.nombre = nombre;
       this.apellido = apellido;
       this.telefono = telefono;
       this.email = email;
       this.nota = nota;
    }
}
