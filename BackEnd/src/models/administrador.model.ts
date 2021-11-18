import {Entity, model, property, hasMany} from '@loopback/repository';
import {Cliente} from './cliente.model';
import {Medico} from './medico.model';

@model()
export class Administrador extends Entity {
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
  clave: string;

  @hasMany(() => Cliente)
  clientes: Cliente[];

  @hasMany(() => Medico)
  medicos: Medico[];

  constructor(data?: Partial<Administrador>) {
    super(data);
  }
}

export interface AdministradorRelations {
  // describe navigational properties here
}

export type AdministradorWithRelations = Administrador & AdministradorRelations;
