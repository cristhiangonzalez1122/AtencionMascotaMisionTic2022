import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Medico, MedicoRelations, Administrador, Veterinaria, Registro, Solicitud} from '../models';
import {AdministradorRepository} from './administrador.repository';
import {VeterinariaRepository} from './veterinaria.repository';
import {RegistroRepository} from './registro.repository';
import {SolicitudRepository} from './solicitud.repository';

export class MedicoRepository extends DefaultCrudRepository<
  Medico,
  typeof Medico.prototype.id,
  MedicoRelations
> {

  public readonly administrador: BelongsToAccessor<Administrador, typeof Medico.prototype.id>;

  public readonly veterinaria: BelongsToAccessor<Veterinaria, typeof Medico.prototype.id>;

  public readonly registros: HasManyRepositoryFactory<Registro, typeof Medico.prototype.id>;

  public readonly solicituds: HasManyRepositoryFactory<Solicitud, typeof Medico.prototype.id>;

  constructor(
    @inject('datasources.MongoDB') dataSource: MongoDbDataSource, @repository.getter('AdministradorRepository') protected administradorRepositoryGetter: Getter<AdministradorRepository>, @repository.getter('VeterinariaRepository') protected veterinariaRepositoryGetter: Getter<VeterinariaRepository>, @repository.getter('RegistroRepository') protected registroRepositoryGetter: Getter<RegistroRepository>, @repository.getter('SolicitudRepository') protected solicitudRepositoryGetter: Getter<SolicitudRepository>,
  ) {
    super(Medico, dataSource);
    this.solicituds = this.createHasManyRepositoryFactoryFor('solicituds', solicitudRepositoryGetter,);
    this.registerInclusionResolver('solicituds', this.solicituds.inclusionResolver);
    this.registros = this.createHasManyRepositoryFactoryFor('registros', registroRepositoryGetter,);
    this.registerInclusionResolver('registros', this.registros.inclusionResolver);
    this.veterinaria = this.createBelongsToAccessorFor('veterinaria', veterinariaRepositoryGetter,);
    this.registerInclusionResolver('veterinaria', this.veterinaria.inclusionResolver);
    this.administrador = this.createBelongsToAccessorFor('administrador', administradorRepositoryGetter,);
    this.registerInclusionResolver('administrador', this.administrador.inclusionResolver);
  }
}
