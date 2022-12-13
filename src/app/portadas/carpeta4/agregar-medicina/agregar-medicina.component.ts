import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-agregar-medicina',
  templateUrl: './agregar-medicina.component.html',
  styleUrls: ['./agregar-medicina.component.css']
})
export class AgregarMedicinaComponent implements OnInit{
  FormMedicina:FormGroup;

  constructor(public formulario:FormBuilder, private api:ApiService, private router:Router){
    this.FormMedicina=this.formulario.group({
      nombreM: [''],
      costo: [''],
      codigoM: [''],
      presentacion: [''],
      NGenerico: ['']
    });
    }

    ngOnInit(): void {
    }

    agregar(): any{
      console.log(this.FormMedicina.value);
      this.api.agregarCon(this.FormMedicina.value).subscribe();
      this.router.navigateByUrl('/medicina');
    }


  }
