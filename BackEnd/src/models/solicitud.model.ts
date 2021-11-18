import {Entity, model, property, belongsTo, hasOne} from '@loopback/repository';
import {Cliente} from './cliente.model';
import {Mascota} from './mascota.model';
import {Medico} from './medico.model';

@model()
export class Solicitud extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @belongsTo(() => Cliente)
  clienteId: string;

  @property({
    type: 'string',
  })
  medicoId?: string;

  @hasOne(() => Mascota)
  mascota: Mascota;

  @hasOne(() => Medico)
  medico: Medico;

  constructor(data?: Partial<Solicitud>) {
    super(data);
  }
}

export interface SolicitudRelations {
  // describe navigational properties here
}

export type SolicitudWithRelations = Solicitud & SolicitudRelations;
