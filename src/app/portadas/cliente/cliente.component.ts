import { ApiService } from './../../servicios/api/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../Interface/Cliente';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes: any;
  constructor(private  api:ApiService,private router:Router){}

  ngOnInit(): void {
    this.api.getCliente().subscribe(dato =>{
      this.clientes = dato;
    })

  }

  //consultar todos los clientes para que se rellene el select de seleccionar elciente

  editar(id = []){
  this.router.navigate(['editar', id]);

  }

  borrar(id:any, iControl:any){
    console.log(id);
    console.log(iControl);
    this.api.eliminarCli(id).subscribe(dato =>{
      this.clientes.splice(iControl,1);

    })

  }

}
