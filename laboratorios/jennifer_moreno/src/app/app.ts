import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo';

@Component({
  selector: 'app-root',
  imports: [CatalogoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('jennifer_moreno');
}