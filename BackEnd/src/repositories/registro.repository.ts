import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasOneRepositoryFactory} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Registro, RegistroRelations, Medico, Cliente, Mascota} from '../models';
import {MedicoRepository} from './medico.repository';
import {ClienteRepository} from './cliente.repository';
import {MascotaRepository} from './mascota.repository';

export class RegistroRepository extends DefaultCrudRepository<
  Registro,
  typeof Registro.prototype.id,
  RegistroRelations
> {

  public readonly medico: BelongsToAccessor<Medico, typeof Registro.prototype.id>;

  public readonly cliente: HasOneRepositoryFactory<Cliente, typeof Registro.prototype.id>;

  public readonly mascota: HasOneRepositoryFactory<Mascota, typeof Registro.prototype.id>;

  constructor(
    @inject('datasources.MongoDB') dataSource: MongoDbDataSource, @repository.getter('MedicoRepository') protected medicoRepositoryGetter: Getter<MedicoRepository>, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>, @repository.getter('MascotaRepository') protected mascotaRepositoryGetter: Getter<MascotaRepository>,
  ) {
    super(Registro, dataSource);
    this.mascota = this.createHasOneRepositoryFactoryFor('mascota', mascotaRepositoryGetter);
    this.registerInclusionResolver('mascota', this.mascota.inclusionResolver);
    this.cliente = this.createHasOneRepositoryFactoryFor('cliente', clienteRepositoryGetter);
    this.registerInclusionResolver('cliente', this.cliente.inclusionResolver);
    this.medico = this.createBelongsToAccessorFor('medico', medicoRepositoryGetter,);
    this.registerInclusionResolver('medico', this.medico.inclusionResolver);
  }
}
