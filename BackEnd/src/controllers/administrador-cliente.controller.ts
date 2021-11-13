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
  Cliente,
} from '../models';
import {AdministradorRepository} from '../repositories';

export class AdministradorClienteController {
  constructor(
    @repository(AdministradorRepository) protected administradorRepository: AdministradorRepository,
  ) { }

  @get('/administradors/{id}/clientes', {
    responses: {
      '200': {
        description: 'Array of Administrador has many Cliente',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Cliente)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Cliente>,
  ): Promise<Cliente[]> {
    return this.administradorRepository.clientes(id).find(filter);
  }

  @post('/administradors/{id}/clientes', {
    responses: {
      '200': {
        description: 'Administrador model instance',
        content: {'application/json': {schema: getModelSchemaRef(Cliente)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Administrador.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cliente, {
            title: 'NewClienteInAdministrador',
            exclude: ['id'],
            optional: ['administradorId']
          }),
        },
      },
    }) cliente: Omit<Cliente, 'id'>,
  ): Promise<Cliente> {
    return this.administradorRepository.clientes(id).create(cliente);
  }

  @patch('/administradors/{id}/clientes', {
    responses: {
      '200': {
        description: 'Administrador.Cliente PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cliente, {partial: true}),
        },
      },
    })
    cliente: Partial<Cliente>,
    @param.query.object('where', getWhereSchemaFor(Cliente)) where?: Where<Cliente>,
  ): Promise<Count> {
    return this.administradorRepository.clientes(id).patch(cliente, where);
  }

  @del('/administradors/{id}/clientes', {
    responses: {
      '200': {
        description: 'Administrador.Cliente DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Cliente)) where?: Where<Cliente>,
  ): Promise<Count> {
    return this.administradorRepository.clientes(id).delete(where);
  }
}
