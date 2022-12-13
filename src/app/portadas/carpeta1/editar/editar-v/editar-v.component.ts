import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../servicios/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editar-v',
  templateUrl: './editar-v.component.html',
  styleUrls: ['./editar-v.component.css']
})
export class EditarVComponent implements OnInit{
  forvacuna: FormGroup;
  idvacuna: any;

  constructor(public formulario: FormBuilder, private  api:ApiService,private router:Router, private active:ActivatedRoute){
  this.idvacuna = this.active.snapshot.paramMap.get('id');
  this.api.getIdVac(this.idvacuna).subscribe(dato =>{
    console.log(dato);
    this.forvacuna.setValue({
      idVacuna: dato[0]['idVacuna'],
      nombreV : dato[0]['nombreV']
    }
    );
  }
  );
  this.forvacuna=this.formulario.group({
  idVacuna:[''],
  nombreV : ['']
    });
}

ngOnInit(): void {}

put():any{
console.log(this.idvacuna);
console.log(this.forvacuna.value);
this.api.editarVac(this.idvacuna, this.forvacuna.value).subscribe(datos => {
this.router.navigateByUrl('/vacuna');

});

}

}