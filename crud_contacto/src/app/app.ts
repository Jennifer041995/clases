import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';  //  necesario para ngModel
import { HttpClientModule } from '@angular/common/http'; //  necesario para tus servicios HTTP

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    FormsModule,       // habilita [(ngModel)]
    HttpClientModule   // habilita tus peticiones a Firebase
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // corregido (plural)
})
export class App { }
