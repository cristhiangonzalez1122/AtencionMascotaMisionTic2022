import {Entity, model, property, belongsTo, hasOne} from '@loopback/repository';
import {Medico} from './medico.model';
import {Cliente} from './cliente.model';
import {Mascota} from './mascota.model';

@model()
export class Registro extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  temperatura: string;

  @property({
    type: 'string',
    required: true,
  })
  peso: string;

  @property({
    type: 'string',
    required: true,
  })
  frecuenciaR: string;

  @property({
    type: 'string',
    required: true,
  })
  frecuenciaC: string;

  @property({
    type: 'string',
    required: true,
  })
  estadoDeAnimo: string;

  @property({
    type: 'string',
    required: true,
  })
  recomendaciones: string;

  @belongsTo(() => Medico)
  medicoId: string;

  @hasOne(() => Cliente)
  cliente: Cliente;

  @hasOne(() => Mascota)
  mascota: Mascota;

  constructor(data?: Partial<Registro>) {
    super(data);
  }
}

export interface RegistroRelations {
  // describe navigational properties here
}

export type RegistroWithRelations = Registro & RegistroRelations;
