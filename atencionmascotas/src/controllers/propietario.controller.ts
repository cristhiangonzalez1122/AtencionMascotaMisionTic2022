/* eslint-disable @typescript-eslint/no-explicit-any */
import {authenticate} from '@loopback/authentication';
import {service} from '@loopback/core';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  HttpErrors,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {Llaves} from '../config/llaves';
import {Credenciales, Propietario} from '../models';
import {PropietarioRepository} from '../repositories';
import {AutenticacionService} from '../services';
const fetch = require('node-fetch');

export class PropietarioController {
  constructor(
    @repository(PropietarioRepository)
    public propietarioRepository: PropietarioRepository,
    @service(AutenticacionService)
    public servicioAutenticacion: AutenticacionService,
  ) {}

  @post('/identificarPropietario', {
    responses: {
      '200': {
        description: 'Identificar Usuarios',
      },
    },
  })
  async identificarPersona(@requestBody() credendiales: Credenciales) {
    const prop = await this.servicioAutenticacion.IdentificarPropietario(
      credendiales.usuario,
      credendiales.clave,
    );
    if (prop) {
      const token = this.servicioAutenticacion.GenerarTokenPropietario(prop);
      return {
        datos: {
          nombre: prop.Nombres,
          correo: prop.Correo,
          id: prop.id,
        },
        tk: token,
      };
    } else {
      throw new HttpErrors[401]('Datos Invalidos');
    }
  }

  @post('/propietarios')
  @response(200, {
    description: 'Propietario model instance',
    content: {'application/json': {schema: getModelSchemaRef(Propietario)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Propietario, {
            title: 'NewPropietario',
            exclude: ['id'],
          }),
        },
      },
    })
    propietario: Omit<Propietario, 'id'>,
  ): Promise<Propietario> {
    const clave = this.servicioAutenticacion.GenerarClave();
    const claveCifrada = this.servicioAutenticacion.CifrarClave(clave);
    propietario.Clave = claveCifrada;
    const objPropietario = await this.propietarioRepository.create(propietario);

    const destino = propietario.Correo;
    const asunto = 'Registro en la App Atencion Mascotas';
    const contenido = `Hola ${propietario.Nombres}, su nombre de usuario es: ${propietario.Correo} y su contraseña es: ${clave}`;
    fetch(
      `${Llaves.urlServicioNotificaciones}/envio-correo?correo_destino=${destino}&asunto=${asunto}&contenido=${contenido}`,
    ).then((data: any) => {
      console.log(data);
    });

    const sms = propietario.Telefono;
    const mensaje = `hola ${propietario.Nombres}, su nombre de usuario es: ${propietario.Correo}, y su contraseña es: ${clave}`;
    fetch(
      `${Llaves.urlServicioNotificaciones}/envio-sms?mensaje=${mensaje}&telefono=${sms}`,
    ).then((data: any) => {
      console.log(data);
    });
    return objPropietario;
  }
  @authenticate.skip()
  @get('/propietarios/count')
  @response(200, {
    description: 'Propietario model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Propietario) where?: Where<Propietario>,
  ): Promise<Count> {
    return this.propietarioRepository.count(where);
  }
  @authenticate.skip()
  @get('/propietarios')
  @response(200, {
    description: 'Array of Propietario model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Propietario, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Propietario) filter?: Filter<Propietario>,
  ): Promise<Propietario[]> {
    return this.propietarioRepository.find(filter);
  }

  @patch('/propietarios')
  @response(200, {
    description: 'Propietario PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Propietario, {partial: true}),
        },
      },
    })
    propietario: Propietario,
    @param.where(Propietario) where?: Where<Propietario>,
  ): Promise<Count> {
    return this.propietarioRepository.updateAll(propietario, where);
  }

  @get('/propietarios/{id}')
  @response(200, {
    description: 'Propietario model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Propietario, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Propietario, {exclude: 'where'})
    filter?: FilterExcludingWhere<Propietario>,
  ): Promise<Propietario> {
    return this.propietarioRepository.findById(id, filter);
  }

  @patch('/propietarios/{id}')
  @response(204, {
    description: 'Propietario PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Propietario, {partial: true}),
        },
      },
    })
    propietario: Propietario,
  ): Promise<void> {
    await this.propietarioRepository.updateById(id, propietario);
  }

  @put('/propietarios/{id}')
  @response(204, {
    description: 'Propietario PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() propietario: Propietario,
  ): Promise<void> {
    await this.propietarioRepository.replaceById(id, propietario);
  }

  @del('/propietarios/{id}')
  @response(204, {
    description: 'Propietario DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.propietarioRepository.deleteById(id);
  }
}
