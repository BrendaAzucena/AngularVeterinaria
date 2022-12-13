import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../servicios/api/api.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  formularioCliente: FormGroup;
  idcliente: any;

  constructor(public formulario: FormBuilder, private api:ApiService,private router:Router, private active:ActivatedRoute ){
    this.idcliente = this.active.snapshot.paramMap.get('id');
    this.api.getId(this.idcliente).subscribe(dato =>{
      console.log(dato);
      this.formularioCliente.setValue({
        idCliente: dato[0]['idCliente'],
        nombre: dato[0]['nombre'],
        apellidoP: dato[0]['apellidoP'],
        apellidoM: dato[0]['apellidoM'],
        telefono: dato[0]['telefono'],
        sexo: dato[0]['sexo'],
        edad: dato[0]['edad']
      }
      );
    }
    );
    this.formularioCliente=this.formulario.group({
      idCliente: [''],
      nombre: [''],
      apellidoP: [''],
      apellidoM: [''],
      telefono: [''],
      sexo: [''],
      edad: ['']
      });
  }

  ngOnInit(): void {}

put():any{
console.log(this.idcliente);
console.log(this.formularioCliente.value);
this.api.editarClien(this.idcliente, this.formularioCliente.value).subscribe(datos => {
  this.router.navigateByUrl('/cliente');

});

}

  }
