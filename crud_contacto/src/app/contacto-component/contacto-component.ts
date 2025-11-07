import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto-component',
  imports: [],
  templateUrl: './contacto-component.html',
  styleUrl: './contacto-component.css',
})
export class ContactoComponent {
 constructor(private router: Router) {}
  volverContactos() {  
    this.router.navigate(['']);
  }
}
