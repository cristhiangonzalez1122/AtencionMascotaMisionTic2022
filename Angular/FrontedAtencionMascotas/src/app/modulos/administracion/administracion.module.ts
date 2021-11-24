import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearPropietarioComponent } from './crear-propietario/crear-propietario.component';
import { ActualizarPropietarioComponent } from './actualizar-propietario/actualizar-propietario.component';
import { EliminarPropietarioComponent } from './eliminar-propietario/eliminar-propietario.component';
import { BuscarPropietarioComponent } from './buscar-propietario/buscar-propietario.component';


@NgModule({
  declarations: [
    CrearPropietarioComponent,
    ActualizarPropietarioComponent,
    EliminarPropietarioComponent,
    BuscarPropietarioComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
