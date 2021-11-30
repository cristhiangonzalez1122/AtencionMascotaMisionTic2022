import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarPropietarioComponent } from './propietario/buscar-propietario/buscar-propietario.component';
import { CrearPropietarioComponent } from './propietario/crear-propietario/crear-propietario.component';
import { EditarPropietarioComponent } from './propietario/editar-propietario/editar-propietario.component';
import { EliminarPropietarioComponent } from './propietario/eliminar-propietario/eliminar-propietario.component';

const routes: Routes = [
  {
    path:'crear-propietario',
    component: CrearPropietarioComponent
  },
  {
    path:'buscar-propietario',
    component: BuscarPropietarioComponent
  },
  {
    path:'editar-propietario',
    component: EditarPropietarioComponent
  },
  {
    path:'eliminar-propietario',
    component: EliminarPropietarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
