import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './portadas/cliente/cliente.component';
import { EditarComponent } from './portadas/editar/editar.component';
import { AgregarComponent } from './portadas/agregar/agregar.component';
import { MascotaComponent } from './portadas/carpeta/mascota/mascota.component';
import { VacunaComponent } from './portadas/carpeta1/vacuna/vacuna.component';
import { EditarVComponent } from './portadas/carpeta1/editar/editar-v/editar-v.component';
import { AgregarVComponent } from './portadas/carpeta1/agregar/agregar-v/agregar-v.component';
import { EditarMComponent } from './portadas/carpeta/editar/editar-m/editar-m.component';
import { AgregarMComponent } from './portadas/carpeta/agregar/agregar-m/agregar-m.component';
import { InicioComponent } from './portadas/inicio/inicio.component';
import { VeterinarioComponent } from './portadas/carpeta 2/veterinario/veterinario.component';
import { AgregarVeterinarioComponent } from './portadas/carpeta 2/agregar-veterinario/agregar-veterinario.component';
import { EditarVeterinarioComponent } from './portadas/carpeta 2/editar-veterinario/editar-veterinario.component';
import { ConsultaComponent } from './portadas/carpeta3/consulta/consulta.component';
import { AgregarConsultaComponent } from './portadas/carpeta3/agregar-consulta/agregar-consulta.component';
import { EditarConsultaComponent } from './portadas/carpeta3/editar-consulta/editar-consulta.component';
import { MedicinaComponent } from './portadas/carpeta4/medicina/medicina.component';
import { EditarMedicinaComponent } from './portadas/carpeta4/editar-medicina/editar-medicina.component';
import { AgregarMedicinaComponent } from './portadas/carpeta4/agregar-medicina/agregar-medicina.component';



const routes: Routes = [
  {
    path:'', redirectTo:'inicio', pathMatch:'full'
  },
  {path:'inicio', component:InicioComponent },
  { path:'cliente', component:ClienteComponent },
  { path:'agregar', component:AgregarComponent },
  { path:'editar/:id', component:EditarComponent},
  { path:'vacuna', component:VacunaComponent},
  { path:'editarV/:id', component:EditarVComponent},
  { path:'agregarV', component:AgregarVComponent},
  { path:'mascota', component:MascotaComponent},
  { path:'editarM/:id', component:EditarMComponent},
  { path:'agregarM', component:AgregarMComponent},
  { path:'inicio', component:InicioComponent},
  { path: 'veterinario', component:VeterinarioComponent},
  { path: 'agregar-veterinario', component:AgregarVeterinarioComponent},
  { path: 'editar-veterinario/:id', component:EditarVeterinarioComponent},
  { path: 'consulta', component:ConsultaComponent},
  { path: 'agregar-consulta', component:AgregarConsultaComponent},
  { path: 'editar-consulta/:id', component:EditarConsultaComponent},
  { path: 'medicina', component:MedicinaComponent},
  { path: 'agregar-medicina', component:AgregarMedicinaComponent},
  { path: 'editar-medicina/:id', component:EditarMedicinaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ClienteComponent]
