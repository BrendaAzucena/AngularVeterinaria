import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../../Interface/Cliente';
import { Mascota } from '../../Interface/Mascota';
import { Vacuna } from '../../Interface/Vacuna';
import { Veterinario } from '../../Interface/Veterinario';
import { Consulta } from '../../Interface/Consulta';
import { Medicina } from 'src/app/Interface/Medicina';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
url:string = "http://localhost/Vete/API/";
  constructor( private http:HttpClient) { }

//Metdos Clientes
  getCliente():Observable<Cliente[]>{
    let direccion = this.url+"clientes.php?p" ;
    return this.http.get<Cliente[]>(direccion);
  }

  getId(id: any):Observable<any>{
    let direccion = this.url+"clientes.php?id="+id;
    return this.http.get<any>(direccion);
  }

  editarClien(id: any ,put: Cliente):Observable<any>{
    let direccion = this.url+"clientes.php?editar="+ id;
    return this.http.put<any>(direccion, put)
  }

  agregarClient(post: Cliente):Observable<any>{
    let direccion = this.url+"clientes.php?agregar=5";
    return this.http.post<any>(direccion, post)
  }

  eliminarCli(id:any):Observable<any>{
    let direccion = this.url+"clientes.php?eliminar="+ id;
    return this.http.delete<any>(direccion);
  }

//Metdos Mascota
  getMascota():Observable<Mascota[]>{
    let direccion = this.url+"mascotas.php?p" ;
    return this.http.get<Mascota[]>(direccion);
  }

  getIdMas(id: any):Observable<any>{
    let direccion = this.url+"mascotas.php?id="+id;
    return this.http.get<any>(direccion);
  }

  editarMas(id: any ,put: Mascota):Observable<any>{
    let direccion = this.url+"mascotas.php?editar="+ id;
    return this.http.put<any>(direccion, put)
  }

  agregarMas(post: Mascota):Observable<any>{
    let direccion = this.url+"mascotas.php?agregar=5";
    return this.http.post<any>(direccion, post)
  }

  eliminarMas(id:any):Observable<any>{
    let direccion = this.url+"mascotas.php?eliminar="+ id;
    return this.http.delete<any>(direccion);
  }

//Metdos Vacuna
 getVacuna():Observable<Vacuna[]>{
  let dire= this.url+"vacunas.php?p" ;
  return this.http.get<Vacuna[]>(dire);
 }

 getIdVac(id: any):Observable<any>{
  let direccion = this.url+"vacunas.php?id="+id;
  return this.http.get<any>(direccion);
}
 editarVac(id: any ,put: Vacuna):Observable<any>{
  let direccion = this.url+"vacunas.php?editar="+ id;
  return this.http.put<any>(direccion, put)
}

 agregarVac(post: Vacuna):Observable<any>{
  let direccion = this.url+"vacunas.php?agregar=5";
  return this.http.post<any>(direccion, post)
}

eliminarVac(id:any):Observable<any>{
  let direccion = this.url+"vacunas.php?eliminar="+ id;
  return this.http.delete<any>(direccion);
}

//Metdos Veterinarios
getVeterinario():Observable<Veterinario[]>{
  let direccion = this.url+"veterinarios.php?p" ;
  return this.http.get<Veterinario[]>(direccion);
}

getIdVete(id: any):Observable<any>{
  let direccion = this.url+"veterinarios.php?id="+id;
  return this.http.get<any>(direccion);
}

editarVeterinario(id: any ,put: Veterinario):Observable<any>{
  let direccion = this.url+"veterinarios.php?editar="+ id;
  return this.http.put<any>(direccion, put)
}

agregarVeterinario(post: Veterinario):Observable<any>{
  let direccion = this.url+"veterinarios.php?agregar=5";
  return this.http.post<any>(direccion, post)
}

eliminarVeterinario(id:any):Observable<any>{
  let direccion = this.url+"veterinarios.php?eliminar="+ id;
  return this.http.delete<any>(direccion);
}

//Metodos Consultas
getConsulta():Observable<Consulta[]>{
  let direccion = this.url+"consultas.php?p" ;
  return this.http.get<Consulta[]>(direccion);
}

getIdCon(id: any):Observable<any>{
  let direccion = this.url+"consultas.php?id="+id;
  return this.http.get<any>(direccion);
}

editarCon(id: any ,put: Consulta):Observable<any>{
  let direccion = this.url+"consultas.php?editar="+ id;
  return this.http.put<any>(direccion, put)
}

agregarCon(post: Consulta):Observable<any>{
  let direccion = this.url+"consultas.php?agregar=5";
  return this.http.post<any>(direccion, post)
}

eliminarCon(id:any):Observable<any>{
  let direccion = this.url+"consultas.php?eliminar="+ id;
  return this.http.delete<any>(direccion);
}

//Metodos Medicinas
getMedicina():Observable<Medicina[]>{
  let direccion = this.url+"medicinas.php?p" ;
  return this.http.get<Medicina[]>(direccion);
}

getIdMedi(id: any):Observable<any>{
  let direccion = this.url+"medicinas.php?id="+id;
  return this.http.get<any>(direccion);
}

editarMedi(id: any ,put: Medicina):Observable<any>{
  let direccion = this.url+"medicinas.php?editar="+ id;
  return this.http.put<any>(direccion, put)
}

agregarMedi(post: Medicina):Observable<any>{
  let direccion = this.url+"medicinas.php?agregar=5";
  return this.http.post<any>(direccion, post)
}

eliminarMedi(id:any):Observable<any>{
  let direccion = this.url+"medicinas.php?eliminar="+ id;
  return this.http.delete<any>(direccion);
}

}
