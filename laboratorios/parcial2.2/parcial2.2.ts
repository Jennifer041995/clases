import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parcial2.2',
  imports: [],
  templateUrl: './parcial2.2.html',
  styleUrl: './parcial2.2.css'
})
export class Parcial22 {
   constructor(private router: Router){

  }
  volverHome(){
    this.router.navigate(['']);
  }
}

