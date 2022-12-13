import { Component,OnInit } from '@angular/core';
import { Mascota } from '../../../../Interface/Mascota';
import { ApiService } from '../../../../servicios/api/api.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agregar-m',
  templateUrl: './agregar-m.component.html',
  styleUrls: ['./agregar-m.component.css']
})
export class AgregarMComponent implements OnInit{
FormMascota:FormGroup;

  constructor(private  api:ApiService,private router:Router, public formulario:FormBuilder){
    this.FormMascota=this.formulario.group({
    nombreM: [''],
    tipoM: [''],
    sexo: [''],
    color: [''],
    fechaN: [''],
    Cliente_idCliente: ['']
      });
  }
  ngOnInit(): void {}

  agregar(): any{
      console.log(this.FormMascota.value);
      this.api.agregarMas(this.FormMascota.value).subscribe();
      this.router.navigateByUrl('/mascota');
      }
      }
