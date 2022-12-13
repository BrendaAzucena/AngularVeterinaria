import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-editar-medicina',
  templateUrl: './editar-medicina.component.html',
  styleUrls: ['./editar-medicina.component.css']
})
export class EditarMedicinaComponent implements OnInit{
  formMedicina: FormGroup;
  idMedicina: any;

  constructor(public formulario: FormBuilder, private api:ApiService, private router:Router, private active:ActivatedRoute){
    this.idMedicina = this.active.snapshot.paramMap.get('id');
    this.api.getIdMedi(this.idMedicina).subscribe(dato =>{
      console.log(dato);
      this.formMedicina.setValue({
        idMedicina: dato[0]['idMedicina'],
        nombreM: dato[0]['nombreM'],
        costo: dato[0]['costo'],
        codigoM: dato[0]['codigoM'],
        presentacion: dato[0]['presentacion'],
        NGenerico: dato[0]['NGenerico'],
      });
    });
    this.formMedicina=this.formulario.group({
      idMedicina: [''],
      nombreM: [''],
      costo: [''],
      codigoM: [''],
      presentacion: [''],
      NGenerico: ['']
    });
  }

  ngOnInit(): void {
  }

  put():any{
    console.log(this.idMedicina);
    console.log(this.formMedicina.value);
    this.api.editarMedi(this.idMedicina, this.formMedicina.value).subscribe(datos =>{
      this.router.navigateByUrl('/medicina');
    });
  }

}
