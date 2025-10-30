import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Producto {
  nombre: string;
  stock: number;
}

@Component({
  selector: 'app-lista-productos',
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-productos.html',
  styleUrls: ['./lista-productos.css']
})
export class ListaProductosComponent {
  productos: Producto[] = [
    { nombre: 'Monitor', stock: 2 },
    { nombre: 'Laptop', stock: 3 },
    { nombre: 'Mouse', stock: 12 },
    { nombre: 'Teclado', stock: 5 },
    { nombre: 'Impresora', stock: 8 },
    { nombre: 'USB', stock: 15 },
    { nombre: 'Tablet', stock: 4 },
    { nombre: 'Auriculares', stock: 7 }
  ];
producto: any;
}
