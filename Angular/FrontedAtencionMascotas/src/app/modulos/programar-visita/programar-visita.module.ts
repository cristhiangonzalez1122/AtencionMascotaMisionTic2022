import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramarVisitaRoutingModule } from './programar-visita-routing.module';
import { CrearConsultaComponent } from './crear-consulta/crear-consulta.component';


@NgModule({
  declarations: [
    CrearConsultaComponent
  ],
  imports: [
    CommonModule,
    ProgramarVisitaRoutingModule
  ]
})
export class ProgramarVisitaModule { }
