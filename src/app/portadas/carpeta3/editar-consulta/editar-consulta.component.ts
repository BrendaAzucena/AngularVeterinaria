import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-editar-consulta',
  templateUrl: './editar-consulta.component.html',
  styleUrls: ['./editar-consulta.component.css']
})
export class EditarConsultaComponent implements OnInit{
  formConsulta: FormGroup;
  idconsulta: any;

  constructor(public formulario: FormBuilder, private api:ApiService, private router:Router, private active:ActivatedRoute){
    this.idconsulta = this.active.snapshot.paramMap.get('id');
    this.api.getIdCon(this.idconsulta).subscribe(dato =>{
      console.log(dato);
      this.formConsulta.setValue({
        idconsulta: dato[0]['idconsulta'],
        fechaC: dato[0]['fechaC'],
        sintomas: dato[0]['sintomas'],
        peso: dato[0]['peso'],
        veterinario_idveterinario: dato[0]['veterinario_idveterinario'],
        Medicina_idMedicina: dato[0]['Medicina_idMedicina']
      });
    });
    this.formConsulta=this.formulario.group({
      idconsulta: [''],
      fechaC: [''],
      sintomas: [''],
      peso: [''],
      veterinario_idveterinario: [''],
      Medicina_idMedicina: ['']
    });
  }

  ngOnInit(): void {
  }

  put():any{
    console.log(this.idconsulta);
    console.log(this.formConsulta.value);
    this.api.editarCon(this.idconsulta, this.formConsulta.value).subscribe(datos =>{
      this.router.navigateByUrl('/consulta');
    });
  }

}
