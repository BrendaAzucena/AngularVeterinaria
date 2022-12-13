import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-veterinario',
  templateUrl: './veterinario.component.html',
  styleUrls: ['./veterinario.component.css']
})
export class VeterinarioComponent implements OnInit{

  veterinarios : any;

  constructor(private api:ApiService, private route:Router){
  }

  ngOnInit(): void {
    this.api.getVeterinario().subscribe(dato =>{
      this.veterinarios = dato;
  })
}

editar(id = []){
  this.route.navigate(['editar-veterinario', id]);
  }

  AgregarVe(){
    this.route.navigate(['agregar-veterinario']);
  }

  eliminar(id:any, iControl:any){
    console.log(id);
    console.log(iControl);
    this.api.eliminarVeterinario(id).subscribe(dato =>{
      this.veterinarios.splice(iControl,1);

    })
  }
}
