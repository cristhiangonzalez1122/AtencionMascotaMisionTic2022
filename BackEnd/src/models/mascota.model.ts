import {Entity, model, property, belongsTo, hasOne} from '@loopback/repository';
import {Cliente} from './cliente.model';
import {TipoAnimal} from './tipo-animal.model';

@model()
export class Mascota extends Entity {
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
  nombreMascota: string;

  @property({
    type: 'string',
    required: true,
  })
  colorOjos: string;

  @property({
    type: 'string',
    required: true,
  })
  colorPiel: string;

  @property({
    type: 'string',
    required: true,
  })
  estatura: string;

  @belongsTo(() => Cliente)
  clienteId: string;

  @hasOne(() => TipoAnimal)
  tipoAnimal: TipoAnimal;

  @property({
    type: 'string',
  })
  solicitudId?: string;

  @property({
    type: 'string',
  })
  registroId?: string;

  constructor(data?: Partial<Mascota>) {
    super(data);
  }
}

export interface MascotaRelations {
  // describe navigational properties here
}

export type MascotaWithRelations = Mascota & MascotaRelations;
