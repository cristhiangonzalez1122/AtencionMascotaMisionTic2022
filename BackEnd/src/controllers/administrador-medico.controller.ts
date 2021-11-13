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
  Administrador,
  Medico,
} from '../models';
import {AdministradorRepository} from '../repositories';

export class AdministradorMedicoController {
  constructor(
    @repository(AdministradorRepository) protected administradorRepository: AdministradorRepository,
  ) { }

  @get('/administradors/{id}/medicos', {
    responses: {
      '200': {
        description: 'Array of Administrador has many Medico',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Medico)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Medico>,
  ): Promise<Medico[]> {
    return this.administradorRepository.medicos(id).find(filter);
  }

  @post('/administradors/{id}/medicos', {
    responses: {
      '200': {
        description: 'Administrador model instance',
        content: {'application/json': {schema: getModelSchemaRef(Medico)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Administrador.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Medico, {
            title: 'NewMedicoInAdministrador',
            exclude: ['id'],
            optional: ['administradorId']
          }),
        },
      },
    }) medico: Omit<Medico, 'id'>,
  ): Promise<Medico> {
    return this.administradorRepository.medicos(id).create(medico);
  }

  @patch('/administradors/{id}/medicos', {
    responses: {
      '200': {
        description: 'Administrador.Medico PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Medico, {partial: true}),
        },
      },
    })
    medico: Partial<Medico>,
    @param.query.object('where', getWhereSchemaFor(Medico)) where?: Where<Medico>,
  ): Promise<Count> {
    return this.administradorRepository.medicos(id).patch(medico, where);
  }

  @del('/administradors/{id}/medicos', {
    responses: {
      '200': {
        description: 'Administrador.Medico DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Medico)) where?: Where<Medico>,
  ): Promise<Count> {
    return this.administradorRepository.medicos(id).delete(where);
  }
}
