import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
  {
    path: "inicio",
    component: InicioComponent
  },
  {
    path: "",
    pathMatch: 'full',
    redirectTo: '/inicio'
  },
  {
    path: '**',
    component: ErrorComponent
  },
  {
    path: 'seguridad',
    loadChildren: () => import("./modulos/seguridad/seguridad.module").then(x => x.SeguridadModule)
  },
  {
    path: 'administracion',
    loadChildren: () => import("./modulos/administracion/administracion.module").then(x => x.AdministracionModule)
  },
  {
    path: 'programar-visita',
    loadChildren: () => import("./modulos/programar-visita/programar-visita.module").then(x => x.ProgramarVisitaModule)
  },
  {
    path: 'visita-medico',
    loadChildren: () => import("./modulos/visita-medico/visita-medico.module").then(x => x.VisitaMedicoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
