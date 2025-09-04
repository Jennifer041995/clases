import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { isModuleNamespaceObject } from 'util/types';


@Component({
  selector: 'app-botonera',
  imports: [FormsModule],
  templateUrl: './botonera.html',
  styleUrls: ['./botonera.css']
})
export class BotoneraComponent {
  //color: string = 'green'; 
  color = "background-color: green"; 
  mensaje = "";
}
