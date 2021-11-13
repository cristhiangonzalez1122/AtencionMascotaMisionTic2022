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
  Solicitud,
  Medico,
} from '../models';
import {SolicitudRepository} from '../repositories';

export class SolicitudMedicoController {
  constructor(
    @repository(SolicitudRepository) protected solicitudRepository: SolicitudRepository,
  ) { }

  @get('/solicituds/{id}/medico', {
    responses: {
      '200': {
        description: 'Solicitud has one Medico',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Medico),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Medico>,
  ): Promise<Medico> {
    return this.solicitudRepository.medico(id).get(filter);
  }

  @post('/solicituds/{id}/medico', {
    responses: {
      '200': {
        description: 'Solicitud model instance',
        content: {'application/json': {schema: getModelSchemaRef(Medico)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Solicitud.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Medico, {
            title: 'NewMedicoInSolicitud',
            exclude: ['id'],
            optional: ['solicitudId']
          }),
        },
      },
    }) medico: Omit<Medico, 'id'>,
  ): Promise<Medico> {
    return this.solicitudRepository.medico(id).create(medico);
  }

  @patch('/solicituds/{id}/medico', {
    responses: {
      '200': {
        description: 'Solicitud.Medico PATCH success count',
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
    return this.solicitudRepository.medico(id).patch(medico, where);
  }

  @del('/solicituds/{id}/medico', {
    responses: {
      '200': {
        description: 'Solicitud.Medico DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Medico)) where?: Where<Medico>,
  ): Promise<Count> {
    return this.solicitudRepository.medico(id).delete(where);
  }
}
