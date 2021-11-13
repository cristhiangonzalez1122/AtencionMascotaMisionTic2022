import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Mascota} from './mascota.model';

@model()
export class TipoAnimal extends Entity {
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
  tipoAnimal: string;

  @belongsTo(() => Mascota)
  mascotaId: string;

  constructor(data?: Partial<TipoAnimal>) {
    super(data);
  }
}

export interface TipoAnimalRelations {
  // describe navigational properties here
}

export type TipoAnimalWithRelations = TipoAnimal & TipoAnimalRelations;
