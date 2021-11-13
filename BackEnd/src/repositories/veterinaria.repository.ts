import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Veterinaria, VeterinariaRelations, Medico} from '../models';
import {MedicoRepository} from './medico.repository';

export class VeterinariaRepository extends DefaultCrudRepository<
  Veterinaria,
  typeof Veterinaria.prototype.id,
  VeterinariaRelations
> {

  public readonly medicos: HasManyRepositoryFactory<Medico, typeof Veterinaria.prototype.id>;

  constructor(
    @inject('datasources.MongoDB') dataSource: MongoDbDataSource, @repository.getter('MedicoRepository') protected medicoRepositoryGetter: Getter<MedicoRepository>,
  ) {
    super(Veterinaria, dataSource);
    this.medicos = this.createHasManyRepositoryFactoryFor('medicos', medicoRepositoryGetter,);
    this.registerInclusionResolver('medicos', this.medicos.inclusionResolver);
  }
}
