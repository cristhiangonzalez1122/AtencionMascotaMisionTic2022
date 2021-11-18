import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Medico,
  Administrador,
} from '../models';
import {MedicoRepository} from '../repositories';

export class MedicoAdministradorController {
  constructor(
    @repository(MedicoRepository)
    public medicoRepository: MedicoRepository,
  ) { }

  @get('/medicos/{id}/administrador', {
    responses: {
      '200': {
        description: 'Administrador belonging to Medico',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Administrador)},
          },
        },
      },
    },
  })
  async getAdministrador(
    @param.path.string('id') id: typeof Medico.prototype.id,
  ): Promise<Administrador> {
    return this.medicoRepository.administrador(id);
  }
}
