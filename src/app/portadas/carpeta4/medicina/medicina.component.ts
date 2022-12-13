import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-medicina',
  templateUrl: './medicina.component.html',
  styleUrls: ['./medicina.component.css']
})
export class MedicinaComponent implements OnInit{

  medicinas : any;

  constructor(private api:ApiService, private route:Router){
  }

  ngOnInit(): void {
    this.api.getMedicina().subscribe(dato =>{
      this.medicinas = dato;
    })
  }

  AgregarMedi(){
    this.route.navigate(['agregar-medicina']);
  }

  editar(id = []){
    this.route.navigate(['editar-medicina', id]);
  }

  eliminar(id:any, iControl:any){
    console.log(id);
    console.log(iControl);
    this.api.eliminarMedi(id).subscribe(dato =>{
      this.medicinas.splice(iControl,1);

    })
  }

}
