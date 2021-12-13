import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitaMedicoRoutingModule } from './visita-medico-routing.module';
import { ConsultaComponent } from './consulta/consulta.component';


@NgModule({
  declarations: [
    ConsultaComponent
  ],
  imports: [
    CommonModule,
    VisitaMedicoRoutingModule
  ]
})
export class VisitaMedicoModule { }
