import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contactos } from '../contactos.model';
import { ServiceContactos } from '../crud_contactos.service';

@Component({
  selector: 'app-editar-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './editar-component.html',
  styleUrl: './editar-component.css'
}) 
export class EditarComponent implements OnInit {
  indice: number = 0;
  contacto: Contactos = new Contactos("", "", "", "", "", "");

  constructor(private route: ActivatedRoute, private router: Router, private ServiceContactos: ServiceContactos) {}

  ngOnInit(): void {
    this.indice = parseInt(this.route.snapshot.params["indice"]);
    // Carga el contacto por índice directamente del array local
    this.contacto = this.ServiceContactos.encontrar_contacto(this.indice);
  }

  editarContacto() {
    if (this.contacto.nombre.trim() && this.contacto.apellido.trim() && this.contacto.telefono.trim()) {
      // Actualiza el contacto usando el índice
      this.ServiceContactos.actualizar_contacto(this.indice, this.contacto);
      // Redirige a la lista de contactos
      this.router.navigate(['/lista']);
    }
  }

  volverContactos() {
    this.router.navigate(['/lista']);
  }
}
