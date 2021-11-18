import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasOneRepositoryFactory} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Mascota, MascotaRelations, Cliente, TipoAnimal} from '../models';
import {ClienteRepository} from './cliente.repository';
import {TipoAnimalRepository} from './tipo-animal.repository';

export class MascotaRepository extends DefaultCrudRepository<
  Mascota,
  typeof Mascota.prototype.id,
  MascotaRelations
> {

  public readonly cliente: BelongsToAccessor<Cliente, typeof Mascota.prototype.id>;

  public readonly tipoAnimal: HasOneRepositoryFactory<TipoAnimal, typeof Mascota.prototype.id>;

  constructor(
    @inject('datasources.MongoDB') dataSource: MongoDbDataSource, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>, @repository.getter('TipoAnimalRepository') protected tipoAnimalRepositoryGetter: Getter<TipoAnimalRepository>,
  ) {
    super(Mascota, dataSource);
    this.tipoAnimal = this.createHasOneRepositoryFactoryFor('tipoAnimal', tipoAnimalRepositoryGetter);
    this.registerInclusionResolver('tipoAnimal', this.tipoAnimal.inclusionResolver);
    this.cliente = this.createBelongsToAccessorFor('cliente', clienteRepositoryGetter,);
    this.registerInclusionResolver('cliente', this.cliente.inclusionResolver);
  }
}
