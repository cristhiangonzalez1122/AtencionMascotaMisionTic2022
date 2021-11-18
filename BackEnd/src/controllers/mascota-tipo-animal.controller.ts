import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Mascota,
  TipoAnimal,
} from '../models';
import {MascotaRepository} from '../repositories';

export class MascotaTipoAnimalController {
  constructor(
    @repository(MascotaRepository) protected mascotaRepository: MascotaRepository,
  ) { }

  @get('/mascotas/{id}/tipo-animal', {
    responses: {
      '200': {
        description: 'Mascota has one TipoAnimal',
        content: {
          'application/json': {
            schema: getModelSchemaRef(TipoAnimal),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<TipoAnimal>,
  ): Promise<TipoAnimal> {
    return this.mascotaRepository.tipoAnimal(id).get(filter);
  }

  @post('/mascotas/{id}/tipo-animal', {
    responses: {
      '200': {
        description: 'Mascota model instance',
        content: {'application/json': {schema: getModelSchemaRef(TipoAnimal)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Mascota.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoAnimal, {
            title: 'NewTipoAnimalInMascota',
            exclude: ['id'],
            optional: ['mascotaId']
          }),
        },
      },
    }) tipoAnimal: Omit<TipoAnimal, 'id'>,
  ): Promise<TipoAnimal> {
    return this.mascotaRepository.tipoAnimal(id).create(tipoAnimal);
  }

  @patch('/mascotas/{id}/tipo-animal', {
    responses: {
      '200': {
        description: 'Mascota.TipoAnimal PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoAnimal, {partial: true}),
        },
      },
    })
    tipoAnimal: Partial<TipoAnimal>,
    @param.query.object('where', getWhereSchemaFor(TipoAnimal)) where?: Where<TipoAnimal>,
  ): Promise<Count> {
    return this.mascotaRepository.tipoAnimal(id).patch(tipoAnimal, where);
  }

  @del('/mascotas/{id}/tipo-animal', {
    responses: {
      '200': {
        description: 'Mascota.TipoAnimal DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(TipoAnimal)) where?: Where<TipoAnimal>,
  ): Promise<Count> {
    return this.mascotaRepository.tipoAnimal(id).delete(where);
  }
}
