export class Contactos {
    id: string = "";
    nombre: string = "";
    apellido: string = "";
    telefono: string = "";  
    
    constructor(id: string, nombre: string, apellido: string, telefono: string){
        this.id = id;
        this.nombre = nombre;   
        this.apellido = apellido;
        this.telefono = telefono;
    }
}