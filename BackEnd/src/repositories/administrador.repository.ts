import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Administrador, AdministradorRelations, Cliente, Medico} from '../models';
import {ClienteRepository} from './cliente.repository';
import {MedicoRepository} from './medico.repository';

export class AdministradorRepository extends DefaultCrudRepository<
  Administrador,
  typeof Administrador.prototype.id,
  AdministradorRelations
> {

  public readonly clientes: HasManyRepositoryFactory<Cliente, typeof Administrador.prototype.id>;

  public readonly medicos: HasManyRepositoryFactory<Medico, typeof Administrador.prototype.id>;

  constructor(
    @inject('datasources.MongoDB') dataSource: MongoDbDataSource, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>, @repository.getter('MedicoRepository') protected medicoRepositoryGetter: Getter<MedicoRepository>,
  ) {
    super(Administrador, dataSource);
    this.medicos = this.createHasManyRepositoryFactoryFor('medicos', medicoRepositoryGetter,);
    this.registerInclusionResolver('medicos', this.medicos.inclusionResolver);
    this.clientes = this.createHasManyRepositoryFactoryFor('clientes', clienteRepositoryGetter,);
    this.registerInclusionResolver('clientes', this.clientes.inclusionResolver);
  }
}
