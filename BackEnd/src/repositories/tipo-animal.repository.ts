import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {TipoAnimal, TipoAnimalRelations, Mascota} from '../models';
import {MascotaRepository} from './mascota.repository';

export class TipoAnimalRepository extends DefaultCrudRepository<
  TipoAnimal,
  typeof TipoAnimal.prototype.id,
  TipoAnimalRelations
> {

  public readonly mascota: BelongsToAccessor<Mascota, typeof TipoAnimal.prototype.id>;

  constructor(
    @inject('datasources.MongoDB') dataSource: MongoDbDataSource, @repository.getter('MascotaRepository') protected mascotaRepositoryGetter: Getter<MascotaRepository>,
  ) {
    super(TipoAnimal, dataSource);
    this.mascota = this.createBelongsToAccessorFor('mascota', mascotaRepositoryGetter,);
    this.registerInclusionResolver('mascota', this.mascota.inclusionResolver);
  }
}
