import { Component,OnInit } from '@angular/core';
import { ApiService } from '../../../servicios/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vacuna',
  templateUrl: './vacuna.component.html',
  styleUrls: ['./vacuna.component.css']
})
export class VacunaComponent implements OnInit{
vacuna: any;
  constructor( private api:ApiService, private r:Router){}

  ngOnInit(): void {
this.api.getVacuna().subscribe(dato =>
  this.vacuna = dato);

  }

  editar(id = []){
    this.r.navigate(['editarV', id]);

    }

    EntrAgregar(){
      this.r.navigate(['/agregarV']);
    }

    borrar(id:any, iControl:any){
      console.log(id);
      console.log(iControl);
      this.api.eliminarCli(id).subscribe(dato =>{
        this.vacuna.splice(iControl,1);

      })

    }

}
