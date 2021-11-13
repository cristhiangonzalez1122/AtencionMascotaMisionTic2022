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
  Mascota,
} from '../models';
import {SolicitudRepository} from '../repositories';

export class SolicitudMascotaController {
  constructor(
    @repository(SolicitudRepository) protected solicitudRepository: SolicitudRepository,
  ) { }

  @get('/solicituds/{id}/mascota', {
    responses: {
      '200': {
        description: 'Solicitud has one Mascota',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Mascota),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Mascota>,
  ): Promise<Mascota> {
    return this.solicitudRepository.mascota(id).get(filter);
  }

  @post('/solicituds/{id}/mascota', {
    responses: {
      '200': {
        description: 'Solicitud model instance',
        content: {'application/json': {schema: getModelSchemaRef(Mascota)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Solicitud.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mascota, {
            title: 'NewMascotaInSolicitud',
            exclude: ['id'],
            optional: ['solicitudId']
          }),
        },
      },
    }) mascota: Omit<Mascota, 'id'>,
  ): Promise<Mascota> {
    return this.solicitudRepository.mascota(id).create(mascota);
  }

  @patch('/solicituds/{id}/mascota', {
    responses: {
      '200': {
        description: 'Solicitud.Mascota PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mascota, {partial: true}),
        },
      },
    })
    mascota: Partial<Mascota>,
    @param.query.object('where', getWhereSchemaFor(Mascota)) where?: Where<Mascota>,
  ): Promise<Count> {
    return this.solicitudRepository.mascota(id).patch(mascota, where);
  }

  @del('/solicituds/{id}/mascota', {
    responses: {
      '200': {
        description: 'Solicitud.Mascota DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Mascota)) where?: Where<Mascota>,
  ): Promise<Count> {
    return this.solicitudRepository.mascota(id).delete(where);
  }
}
