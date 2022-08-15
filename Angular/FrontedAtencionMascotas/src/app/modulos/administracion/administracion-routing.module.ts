import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarMascotaComponent } from './mascotas/buscar-mascota/buscar-mascota.component';
import { CrearMascotaComponent } from './mascotas/crear-mascota/crear-mascota.component';
import { BuscarPropietarioComponent } from './propietario/buscar-propietario/buscar-propietario.component';
import { CrearPropietarioComponent } from './propietario/crear-propietario/crear-propietario.component';
import { EditarPropietarioComponent } from './propietario/editar-propietario/editar-propietario.component';
import { EliminarPropietarioComponent } from './propietario/eliminar-propietario/eliminar-propietario.component';
import { BuscarVeterinarioComponent } from './veterinario/buscar-veterinario/buscar-veterinario.component';
import { CrearVeterinarioComponent } from './veterinario/crear-veterinario/crear-veterinario.component';
import { EditarVeterinarioComponent } from './veterinario/editar-veterinario/editar-veterinario.component';
import { EliminarVeterinarioComponent } from './veterinario/eliminar-veterinario/eliminar-veterinario.component';

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
    path:'editar-propietario/:id',
    component: EditarPropietarioComponent
  },

  {
    path:'eliminar-propietario/:id',
    component: EliminarPropietarioComponent
  },
  {
    path:'crear-veterinario',
    component: CrearVeterinarioComponent
  },
  {
    path:'buscar-veterinario',
    component: BuscarVeterinarioComponent
  },
  {
    path:'editar-veterinario/:id',
    component: EditarVeterinarioComponent
  },
  {
    path:'eliminar-veterinario/:id',
    component: EliminarVeterinarioComponent
  },
  {
    path: 'crear-mascota',
    component: CrearMascotaComponent
  },
  {
    path: 'buscar-mascota',
    component: BuscarMascotaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
