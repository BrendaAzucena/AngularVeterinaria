import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-agregar-veterinario',
  templateUrl: './agregar-veterinario.component.html',
  styleUrls: ['./agregar-veterinario.component.css']
})
export class AgregarVeterinarioComponent implements OnInit{
  FormVeterinario:FormGroup;

  constructor(public formulario:FormBuilder, private api:ApiService, private router:Router){
    this.FormVeterinario=this.formulario.group({
      nombre: [''],
      apellidoP: [''],
      apellidoM: [''],
      telefono: ['']
    });
  }

  ngOnInit(): void {

  }

  agregar(): any{
    console.log(this.FormVeterinario.value);
    this.api.agregarVeterinario(this.FormVeterinario.value).subscribe();
    this.router.navigateByUrl('/veterinario');
  }
}