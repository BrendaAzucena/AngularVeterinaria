import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-editar-veterinario',
  templateUrl: './editar-veterinario.component.html',
  styleUrls: ['./editar-veterinario.component.css']
})
export class EditarVeterinarioComponent implements OnInit{
  forveterinario: FormGroup;
  idveterinario: any;

  constructor(public formulario: FormBuilder, private api:ApiService, private router:Router, private active:ActivatedRoute){
    this.idveterinario = this.active.snapshot.paramMap.get('id');
    this.api.getIdVete(this.idveterinario).subscribe(dato =>{
      console.log(dato);
      this.forveterinario.setValue({
        idveterinario: dato[0]['idveterinario'],
        nombre: dato[0]['nombre'],
        apellidoP: dato[0]['apellidoP'],
        apellidoM: dato[0]['apellidoM'],
        telefono: dato[0]['telefono']
      });
    });
    this.forveterinario=this.formulario.group({
      idveterinario: [''],
      nombre: [''],
      apellidoP: [''],
      apellidoM: [''],
      telefono: ['']
    });
  }

    ngOnInit(): void {}

    put():any{
      console.log(this.idveterinario);
      console.log(this.forveterinario.value);
      this.api.editarVeterinario(this.idveterinario, this.forveterinario.value).subscribe(dato => {
        this.router.navigateByUrl('/veterinario');
      });
    }
  }
