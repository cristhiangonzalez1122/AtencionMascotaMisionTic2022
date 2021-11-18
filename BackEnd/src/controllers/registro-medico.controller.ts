import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Registro,
  Medico,
} from '../models';
import {RegistroRepository} from '../repositories';

export class RegistroMedicoController {
  constructor(
    @repository(RegistroRepository)
    public registroRepository: RegistroRepository,
  ) { }

  @get('/registros/{id}/medico', {
    responses: {
      '200': {
        description: 'Medico belonging to Registro',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Medico)},
          },
        },
      },
    },
  })
  async getMedico(
    @param.path.string('id') id: typeof Registro.prototype.id,
  ): Promise<Medico> {
    return this.registroRepository.medico(id);
  }
}
