import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../servicios/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editar-m',
  templateUrl: './editar-m.component.html',
  styleUrls: ['./editar-m.component.css']
})
export class EditarMComponent implements OnInit {
  formascota: FormGroup;
  idmascota: any;

  constructor(public formulario: FormBuilder, private api:ApiService,private router:Router, private active:ActivatedRoute){
    this.idmascota = this.active.snapshot.paramMap.get('id');
    this.api.getIdMas(this.idmascota).subscribe(dato =>{
      console.log(dato);
      this.formascota.setValue({
        idMascota: dato[0]['idMascota'],
        nombreM: dato[0]['nombreM'],
        tipoM: dato[0]['tipoM'],
        sexo: dato[0]['sexo'],
        color: dato[0]['color'],
        fechaN: dato[0]['fechaN'],
        Cliente_idCliente: dato[0]['Cliente_idCliente']
      }
      );
    }
    );
    this.formascota=this.formulario.group({
    idMascota: [''],
    nombreM: [''],
    tipoM: [''],
    sexo: [''],
    color: [''],
    fechaN: [''],
    Cliente_idCliente: ['']
      });
  }

  ngOnInit(): void {}

put():any{
console.log(this.idmascota);
console.log(this.formascota.value);
this.api.editarMas(this.idmascota, this.formascota.value).subscribe(datos => {
  this.router.navigateByUrl('/mascota');

});

}

  }
