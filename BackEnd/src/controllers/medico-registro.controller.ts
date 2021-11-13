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
  Medico,
  Registro,
} from '../models';
import {MedicoRepository} from '../repositories';

export class MedicoRegistroController {
  constructor(
    @repository(MedicoRepository) protected medicoRepository: MedicoRepository,
  ) { }

  @get('/medicos/{id}/registros', {
    responses: {
      '200': {
        description: 'Array of Medico has many Registro',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Registro)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Registro>,
  ): Promise<Registro[]> {
    return this.medicoRepository.registros(id).find(filter);
  }

  @post('/medicos/{id}/registros', {
    responses: {
      '200': {
        description: 'Medico model instance',
        content: {'application/json': {schema: getModelSchemaRef(Registro)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Medico.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Registro, {
            title: 'NewRegistroInMedico',
            exclude: ['id'],
            optional: ['medicoId']
          }),
        },
      },
    }) registro: Omit<Registro, 'id'>,
  ): Promise<Registro> {
    return this.medicoRepository.registros(id).create(registro);
  }

  @patch('/medicos/{id}/registros', {
    responses: {
      '200': {
        description: 'Medico.Registro PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Registro, {partial: true}),
        },
      },
    })
    registro: Partial<Registro>,
    @param.query.object('where', getWhereSchemaFor(Registro)) where?: Where<Registro>,
  ): Promise<Count> {
    return this.medicoRepository.registros(id).patch(registro, where);
  }

  @del('/medicos/{id}/registros', {
    responses: {
      '200': {
        description: 'Medico.Registro DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Registro)) where?: Where<Registro>,
  ): Promise<Count> {
    return this.medicoRepository.registros(id).delete(where);
  }
}
