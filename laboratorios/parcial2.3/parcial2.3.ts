import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parcial2.3',
  imports: [],
  templateUrl: './parcial2.3.html',
  styleUrl: './parcial2.3.css'
})
export class Parcial23 {
constructor(private router: Router){

  }
  volverHome(){
    this.router.navigate(['']);
  }
}
