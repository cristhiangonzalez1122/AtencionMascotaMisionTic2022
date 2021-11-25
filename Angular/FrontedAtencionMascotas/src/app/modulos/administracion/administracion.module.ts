import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearPropietarioComponent } from './propietario/crear-propietario/crear-propietario.component';
import { EditarPropietarioComponent } from './propietario/editar-propietario/editar-propietario.component';
import { EliminarPropietarioComponent } from './propietario/eliminar-propietario/eliminar-propietario.component';
import { BuscarPropietarioComponent } from './propietario/buscar-propietario/buscar-propietario.component';
import { CrearVeterinarioComponent } from './veterinario/crear-veterinario/crear-veterinario.component';
import { EditarVeterinarioComponent } from './veterinario/editar-veterinario/editar-veterinario.component';
import { EliminarVeterinarioComponent } from './veterinario/eliminar-veterinario/eliminar-veterinario.component';
import { BuscarVeterinarioComponent } from './veterinario/buscar-veterinario/buscar-veterinario.component';
import { CrearCentroVetComponent } from './centroVeterinario/crear-centro-vet/crear-centro-vet.component';
import { EditarCentroVetComponent } from './centroVeterinario/editar-centro-vet/editar-centro-vet.component';
import { EliminarCentroVetComponent } from './centroVeterinario/eliminar-centro-vet/eliminar-centro-vet.component';
import { BuscarCentroVetComponent } from './centroVeterinario/buscar-centro-vet/buscar-centro-vet.component';
import { CrearMascotaComponent } from './mascotas/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascotas/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascotas/eliminar-mascota/eliminar-mascota.component';
import { BuscarMascotaComponent } from './mascotas/buscar-mascota/buscar-mascota.component';
import { CrearTipoComponent } from './tipoAnimal/crear-tipo/crear-tipo.component';
import { EditarTipoComponent } from './tipoAnimal/editar-tipo/editar-tipo.component';
import { EliminarTipoComponent } from './tipoAnimal/eliminar-tipo/eliminar-tipo.component';
import { BuscarTipoComponent } from './tipoAnimal/buscar-tipo/buscar-tipo.component';


@NgModule({
  declarations: [
    CrearPropietarioComponent,
    EditarPropietarioComponent,
    EliminarPropietarioComponent,
    BuscarPropietarioComponent,
    CrearVeterinarioComponent,
    EditarVeterinarioComponent,
    EliminarVeterinarioComponent,
    BuscarVeterinarioComponent,
    CrearCentroVetComponent,
    EditarCentroVetComponent,
    EliminarCentroVetComponent,
    BuscarCentroVetComponent,
    CrearMascotaComponent,
    EditarMascotaComponent,
    EliminarMascotaComponent,
    BuscarMascotaComponent,
    CrearTipoComponent,
    EditarTipoComponent,
    EliminarTipoComponent,
    BuscarTipoComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
