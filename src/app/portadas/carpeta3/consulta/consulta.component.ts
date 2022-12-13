import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  consultas: any;

  constructor(private api:ApiService, private route:Router){
  }

  ngOnInit(): void {
    this.api.getConsulta().subscribe(dato =>{
      this.consultas = dato;
    })
  }

  AgregarCon(){
    this.route.navigate(['agregar-consulta']);
  }

  editar(id = []){
    this.route.navigate(['editar-consulta', id]);
  }

  eliminar(id:any, iControl:any){
    console.log(id);
    console.log(iControl);
    this.api.eliminarCon(id).subscribe(dato =>{
      this.consultas.splice(iControl,1);

    })
  }
}
