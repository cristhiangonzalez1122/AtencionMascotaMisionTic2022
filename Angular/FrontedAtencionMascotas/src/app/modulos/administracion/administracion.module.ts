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


@NgModule({
  declarations: [
    CrearPropietarioComponent,
    EditarPropietarioComponent,
    EliminarPropietarioComponent,
    BuscarPropietarioComponent,
    CrearVeterinarioComponent,
    EditarVeterinarioComponent,
    EliminarVeterinarioComponent,
    BuscarVeterinarioComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
