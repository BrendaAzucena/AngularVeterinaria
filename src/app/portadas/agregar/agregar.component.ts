import { Component,OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from '../../Interface/Cliente';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit{
  FormCliente:FormGroup;
  //Cliente :any;
  constructor(public formulario:FormBuilder, private api:ApiService,private router:Router){
    this.FormCliente=this.formulario.group({
    nombre: [''],
    apellidoP: [''],
    apellidoM: [''],
    telefono: [''],
    sexo: [''],
    edad: ['']
    });
  }

  ngOnInit(): void {}


enviar(): any{
console.log(this.FormCliente.value);
this.api.agregarClient(this.FormCliente.value).subscribe();
this.router.navigateByUrl('/cliente');
}
}
