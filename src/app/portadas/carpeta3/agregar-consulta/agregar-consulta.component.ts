import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../servicios/api/api.service';

@Component({
  selector: 'app-agregar-consulta',
  templateUrl: './agregar-consulta.component.html',
  styleUrls: ['./agregar-consulta.component.css']
})
export class AgregarConsultaComponent implements OnInit{
  FormConsulta:FormGroup;

  constructor(public formulario:FormBuilder, private api:ApiService, private router:Router){
    this.FormConsulta=this.formulario.group({
      fechaC: [''],
      sintomas: [''],
      peso: [''],
      veterinario_idveterinario: [''],
      Medicina_idMedicina: ['']
    });
    }

    ngOnInit(): void {
    }

    agregar(): any{
      console.log(this.FormConsulta.value);
      this.api.agregarCon(this.FormConsulta.value).subscribe();
      this.router.navigateByUrl('/consulta');
    }


  }
