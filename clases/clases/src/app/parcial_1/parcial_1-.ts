import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-parcial_1',
  imports: [FormsModule],
  templateUrl: './parcial_1.html',
  styleUrls: ['./parcial_1.css']
})
export class Parcial1 {
  color: string = 'red';
}
