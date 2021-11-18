import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  TipoAnimal,
  Mascota,
} from '../models';
import {TipoAnimalRepository} from '../repositories';

export class TipoAnimalMascotaController {
  constructor(
    @repository(TipoAnimalRepository)
    public tipoAnimalRepository: TipoAnimalRepository,
  ) { }

  @get('/tipo-animals/{id}/mascota', {
    responses: {
      '200': {
        description: 'Mascota belonging to TipoAnimal',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Mascota)},
          },
        },
      },
    },
  })
  async getMascota(
    @param.path.string('id') id: typeof TipoAnimal.prototype.id,
  ): Promise<Mascota> {
    return this.tipoAnimalRepository.mascota(id);
  }
}
