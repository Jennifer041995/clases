import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContactosService } from '../crud_contactos.service';

@Component({
  selector: 'app-actualizar-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './actualizar-component.html',
  styleUrl: './actualizar-component.css',
})
export class ActualizarComponent implements OnInit {
  indice: number = 0;
  contactos: any;
  accion: number | undefined;

  constructor(private route: ActivatedRoute, private contactosService: ContactosService) {}

  ngOnInit(): void {
    this.accion = parseInt(this.route.snapshot.queryParams['accion']);
    this.contactos = this.contactosService.contactos;
    this.indice = +this.route.snapshot.params['id'];
  }
}
