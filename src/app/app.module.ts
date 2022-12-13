import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ClienteComponent } from './portadas/cliente/cliente.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {  HttpClientModule, HttpClient } from '@angular/common/http';
import { MascotaComponent } from './portadas/carpeta/mascota/mascota.component';
import { VacunaComponent } from './portadas/carpeta1/vacuna/vacuna.component';
import { EditarVComponent } from './portadas/carpeta1/editar/editar-v/editar-v.component';
import { AgregarVComponent } from './portadas/carpeta1/agregar/agregar-v/agregar-v.component';
import { AgregarMComponent } from './portadas/carpeta/agregar/agregar-m/agregar-m.component';
import { EditarMComponent } from './portadas/carpeta/editar/editar-m/editar-m.component';
import { EditarComponent } from './portadas/editar/editar.component';
import { AgregarComponent } from './portadas/agregar/agregar.component';
import { InicioComponent } from './portadas/inicio/inicio.component';
import { VeterinarioComponent } from './portadas/carpeta 2/veterinario/veterinario.component';
import { AgregarVeterinarioComponent } from './portadas/carpeta 2/agregar-veterinario/agregar-veterinario.component';
import { EditarVeterinarioComponent } from './portadas/carpeta 2/editar-veterinario/editar-veterinario.component';
import { ConsultaComponent } from './portadas/carpeta3/consulta/consulta.component';
import { AgregarConsultaComponent } from './portadas/carpeta3/agregar-consulta/agregar-consulta.component';
import { EditarConsultaComponent } from './portadas/carpeta3/editar-consulta/editar-consulta.component';
import { MedicinaComponent } from './portadas/carpeta4/medicina/medicina.component';
import { AgregarMedicinaComponent } from './portadas/carpeta4/agregar-medicina/agregar-medicina.component';
import { EditarMedicinaComponent } from './portadas/carpeta4/editar-medicina/editar-medicina.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
     MascotaComponent,
     FooterComponent,
     HeaderComponent,
     VacunaComponent,
     EditarVComponent,
     AgregarVComponent,
     AgregarMComponent,
     EditarMComponent,
     EditarComponent,
     AgregarComponent,
     InicioComponent,
    //HeaderComponent,
    //FooterComponent,
     ClienteComponent,
     VeterinarioComponent,
     AgregarVeterinarioComponent,
     EditarVeterinarioComponent,
     AgregarConsultaComponent,
     EditarConsultaComponent,
     ConsultaComponent,
     MedicinaComponent,
     AgregarMedicinaComponent,
     EditarMedicinaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
