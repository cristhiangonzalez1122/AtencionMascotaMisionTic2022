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
  Role,
  Propietario,
} from '../models';
import {RoleRepository} from '../repositories';

export class RolePropietarioController {
  constructor(
    @repository(RoleRepository) protected roleRepository: RoleRepository,
  ) { }

  @get('/roles/{id}/propietarios', {
    responses: {
      '200': {
        description: 'Array of Role has many Propietario',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Propietario)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Propietario>,
  ): Promise<Propietario[]> {
    return this.roleRepository.propietarios(id).find(filter);
  }

  @post('/roles/{id}/propietarios', {
    responses: {
      '200': {
        description: 'Role model instance',
        content: {'application/json': {schema: getModelSchemaRef(Propietario)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Role.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Propietario, {
            title: 'NewPropietarioInRole',
            exclude: ['id'],
            optional: ['roleId']
          }),
        },
      },
    }) propietario: Omit<Propietario, 'id'>,
  ): Promise<Propietario> {
    return this.roleRepository.propietarios(id).create(propietario);
  }

  @patch('/roles/{id}/propietarios', {
    responses: {
      '200': {
        description: 'Role.Propietario PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Propietario, {partial: true}),
        },
      },
    })
    propietario: Partial<Propietario>,
    @param.query.object('where', getWhereSchemaFor(Propietario)) where?: Where<Propietario>,
  ): Promise<Count> {
    return this.roleRepository.propietarios(id).patch(propietario, where);
  }

  @del('/roles/{id}/propietarios', {
    responses: {
      '200': {
        description: 'Role.Propietario DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Propietario)) where?: Where<Propietario>,
  ): Promise<Count> {
    return this.roleRepository.propietarios(id).delete(where);
  }
}
