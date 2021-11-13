import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Administrador} from './administrador.model';
import {Veterinaria} from './veterinaria.model';
import {Registro} from './registro.model';
import {Solicitud} from './solicitud.model';

@model()
export class Medico extends Entity {
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
  documento: string;

  @property({
    type: 'string',
    required: true,
  })
  nombres: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidos: string;

  @property({
    type: 'string',
    required: true,
  })
  telefono: string;

  @property({
    type: 'string',
    required: true,
  })
  rol: string;

  @property({
    type: 'string',
    required: true,
  })
  especialidad: string;

  @property({
    type: 'string',
    required: true,
  })
  tarjetaProfecional: string;

  @belongsTo(() => Administrador)
  administradorId: string;

  @belongsTo(() => Veterinaria)
  veterinariaId: string;

  @hasMany(() => Registro)
  registros: Registro[];

  @hasMany(() => Solicitud)
  solicituds: Solicitud[];

  @property({
    type: 'string',
  })
  solicitudId?: string;

  constructor(data?: Partial<Medico>) {
    super(data);
  }
}

export interface MedicoRelations {
  // describe navigational properties here
}

export type MedicoWithRelations = Medico & MedicoRelations;
