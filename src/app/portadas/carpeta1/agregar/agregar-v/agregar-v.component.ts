import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../../servicios/api/api.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-agregar-v',
  templateUrl: './agregar-v.component.html',
  styleUrls: ['./agregar-v.component.css']
})
export class AgregarVComponent implements OnInit{
  FormVacuna:FormGroup;

  constructor( private router:Router, private api:ApiService, public formulario:FormBuilder){
    this.FormVacuna=this.formulario.group({
      nombreV: ['']
      });
  }

  ngOnInit(): void {
  }


  agregar(): any{
    console.log(this.FormVacuna.value);
    this.api.agregarVac(this.FormVacuna.value).subscribe();
    this.router.navigateByUrl('/vacuna');
    }

}
