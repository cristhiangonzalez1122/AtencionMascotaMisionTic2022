import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPropietarioComponent } from './propietario/crear-propietario/crear-propietario.component';
import { EditarPropietarioComponent } from './propietario/editar-propietario/editar-propietario.component';

const routes: Routes = [
  {
    path: 'crear-propietario',
    component: CrearPropietarioComponent
  },
  {
    path: 'editar-propietario',
    component: EditarPropietarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
