import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Cliente,
  Administrador,
} from '../models';
import {ClienteRepository} from '../repositories';

export class ClienteAdministradorController {
  constructor(
    @repository(ClienteRepository)
    public clienteRepository: ClienteRepository,
  ) { }

  @get('/clientes/{id}/administrador', {
    responses: {
      '200': {
        description: 'Administrador belonging to Cliente',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Administrador)},
          },
        },
      },
    },
  })
  async getAdministrador(
    @param.path.string('id') id: typeof Cliente.prototype.id,
  ): Promise<Administrador> {
    return this.clienteRepository.administrador(id);
  }
}
