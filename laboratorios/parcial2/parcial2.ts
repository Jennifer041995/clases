import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-parcial2',
  imports: [CommonModule, RouterModule],
  templateUrl: './parcial2.html',
  styleUrl: './parcial2.css'
})
export class Parcial2 {
  constructor(private router: Router){

  }
  volverHome(){
    this.router.navigate(['']);
  }
}
