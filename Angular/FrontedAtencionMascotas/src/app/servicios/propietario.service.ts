import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloPropietario } from '../modelos/propietario.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {
  url = 'http://localhost:3000';
  token: string='';

  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) {
    this.token = this.seguridadServicio.ObtenerToken();
  }

  ObtenerRegistros(): Observable<ModeloPropietario[]>{
   return this.http.get<ModeloPropietario[]>(`${this.url}/propietarios`)
  }

  CrearPropietario(propietario: ModeloPropietario): Observable<ModeloPropietario>{
    return this.http.post<ModeloPropietario>(`${this.url}/propietarios`, propietario, {
      headers: new HttpHeaders({
        'Autorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarPropietario(propietario: ModeloPropietario): Observable<ModeloPropietario>{
    return this.http.put<ModeloPropietario>(`${this.url}/propietarios`, propietario, {
      headers: new HttpHeaders({
        'Autorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarPropietario(id: string): Observable<any>{
    return this.http.delete(`${this.url}/propietarios/${id}`, {
      headers: new HttpHeaders({
        'Autorization': `Bearer ${this.token}`
      })
    })
  }

}
