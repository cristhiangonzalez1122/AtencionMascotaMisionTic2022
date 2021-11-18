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
  Veterinaria,
} from '../models';
import {MedicoRepository} from '../repositories';

export class MedicoVeterinariaController {
  constructor(
    @repository(MedicoRepository)
    public medicoRepository: MedicoRepository,
  ) { }

  @get('/medicos/{id}/veterinaria', {
    responses: {
      '200': {
        description: 'Veterinaria belonging to Medico',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Veterinaria)},
          },
        },
      },
    },
  })
  async getVeterinaria(
    @param.path.string('id') id: typeof Medico.prototype.id,
  ): Promise<Veterinaria> {
    return this.medicoRepository.veterinaria(id);
  }
}
