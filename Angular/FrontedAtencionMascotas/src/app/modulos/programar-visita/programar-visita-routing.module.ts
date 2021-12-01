import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearConsultaComponent } from './crear-consulta/crear-consulta.component';

const routes: Routes = [
  {
    path:'crear-consulta',
    component:CrearConsultaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramarVisitaRoutingModule { }
