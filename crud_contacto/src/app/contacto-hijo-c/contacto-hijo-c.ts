import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Contactos } from '../contactos.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contacto-hijo-c',
  imports: [CommonModule, RouterModule],
  templateUrl: './contacto-hijo-c.html',
  styleUrl: './contacto-hijo-c.css'
})
export class ContactoHijoC {
  @Input() contactoLista!: Contactos;
  @Input() indice!: number;

  constructor() {}
}
