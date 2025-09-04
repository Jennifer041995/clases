import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotoneraComponent } from './botonera/botonera';

@Component({
  selector: 'app-root',
  imports: [BotoneraComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('botonera');
}
