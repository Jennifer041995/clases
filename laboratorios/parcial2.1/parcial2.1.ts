import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parcial2.1',
  imports: [],
  templateUrl: './parcial2.1.html',
  styleUrl: './parcial2.1.css'
})
export class Parcial21 {
    constructor(private router: Router){
  }
  volverHome(){
    this.router.navigate(['']);
  }
}
