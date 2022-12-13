import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../../Interface/Mascota';
import { ApiService } from '../../../servicios/api/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css'],

})
export class MascotaComponent implements OnInit{

  mascota: any;

  constructor(private mascotaSe:ApiService, private route:Router){
  }

  ngOnInit(): void {
    this.mascotaSe.getMascota().subscribe(dato =>{
      this.mascota = dato;
  })

}

editar(id = []){
  this.route.navigate(['editarM', id]);

  }

  EntAgregar(){
    this.route.navigate(['agregarM']);
  }

  borrar(id:any, iControl:any){
    console.log(id);
    console.log(iControl);
    this.mascotaSe.eliminarMas(id).subscribe(dato =>{
      this.mascota.splice(iControl,1);

    })

  }
}
