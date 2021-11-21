import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {Llaves} from '../config/llaves';
import {Propietario} from '../models';
import {PropietarioRepository} from '../repositories';

const generador = require("password-generator");
const cryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');
@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(
    @repository(PropietarioRepository)
    public propietarioRePository: PropietarioRepository
  ) { }

  /*
   * Add service methods here
   */

  GenerarClave() {
    let clave = generador(8, false);
    return clave;
  }

  CifrarClave(clave: string) {
    let claveCifrada = cryptoJS.MD5(clave).toString();
    return claveCifrada;
  }

  IdentificarPropietario(usuario: string, clave: string) {

    try {
      let p = this.propietarioRePository.findOne({where: {Correo: usuario, Clave: clave}});
      if (p) {
        return p;
      }
      return false
    } catch {
      return false;

    }

  }


  GenerarTokenJWT(Propietario: Propietario) {
    let token = jwt.sign({
      data: {
        id: Propietario.id,
        correo: Propietario.Correo,
        nombre: Propietario.Nombres + " " + Propietario.Apellidos
      }

    },
      Llaves.claveJWT);
    return token;
  }

  validarTokenJWT(token: string) {
    try {
      let datos = jwt.verify(token, Llaves.claveJWT);
      return datos;
    } catch {
      return false;
    }
  }

}
