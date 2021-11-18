import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasOneRepositoryFactory} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Solicitud, SolicitudRelations, Cliente, Mascota, Medico} from '../models';
import {ClienteRepository} from './cliente.repository';
import {MascotaRepository} from './mascota.repository';
import {MedicoRepository} from './medico.repository';

export class SolicitudRepository extends DefaultCrudRepository<
  Solicitud,
  typeof Solicitud.prototype.id,
  SolicitudRelations
> {

  public readonly cliente: BelongsToAccessor<Cliente, typeof Solicitud.prototype.id>;

  public readonly mascota: HasOneRepositoryFactory<Mascota, typeof Solicitud.prototype.id>;

  public readonly medico: HasOneRepositoryFactory<Medico, typeof Solicitud.prototype.id>;

  constructor(
    @inject('datasources.MongoDB') dataSource: MongoDbDataSource, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>, @repository.getter('MascotaRepository') protected mascotaRepositoryGetter: Getter<MascotaRepository>, @repository.getter('MedicoRepository') protected medicoRepositoryGetter: Getter<MedicoRepository>,
  ) {
    super(Solicitud, dataSource);
    this.medico = this.createHasOneRepositoryFactoryFor('medico', medicoRepositoryGetter);
    this.registerInclusionResolver('medico', this.medico.inclusionResolver);
    this.mascota = this.createHasOneRepositoryFactoryFor('mascota', mascotaRepositoryGetter);
    this.registerInclusionResolver('mascota', this.mascota.inclusionResolver);
    this.cliente = this.createBelongsToAccessorFor('cliente', clienteRepositoryGetter,);
    this.registerInclusionResolver('cliente', this.cliente.inclusionResolver);
  }
}
