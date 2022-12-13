import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  constructor(private router:Router){}

  ngOnInit(): void {

  }

  cliente(){
    this.router.navigate(['cliente']);
  }

  mascota(){
    this.router.navigate(['mascota']);
  }

  vacuna(){
    this.router.navigate(['vacuna']);
  }

  veterinario(){
    this.router.navigate(['veterinario']);
  }

  consulta(){
    this.router.navigate(['consulta']);
  }

  medicina(){
    this.router.navigate(['medicina']);
  }
}
