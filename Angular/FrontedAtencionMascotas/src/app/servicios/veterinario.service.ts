import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloVeterinario } from '../modelos/veterinario.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

  url = 'http://localhost:3000';
  token: string='';

  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) {
    this.token = this.seguridadServicio.ObtenerToken();
  }

  ObtenerRegistrosVeterinario(): Observable<ModeloVeterinario[]>{
   return this.http.get<ModeloVeterinario[]>(`${this.url}/veterinarios`);
  }

  ObtenerRegistrosVetPorId(id: string): Observable<ModeloVeterinario>{
    return this.http.get<ModeloVeterinario>(`${this.url}/veterinarios/${id}`);
   }

  CrearVeterinario(veterinario: ModeloVeterinario): Observable<ModeloVeterinario>{
    return this.http.post<ModeloVeterinario>(`${this.url}/veterinarios`, veterinario, {
      headers: new HttpHeaders({
        'Autorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarVeterinario(veterinario: ModeloVeterinario): Observable<ModeloVeterinario>{
    return this.http.put<ModeloVeterinario>(`${this.url}/veterinarios/${veterinario.id}`, veterinario, {
      headers: new HttpHeaders({
        'Autorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarVeterinario(id: string): Observable<any>{
    return this.http.delete(`${this.url}/veterinarios/${id}`, {
      headers: new HttpHeaders({
        'Autorization': `Bearer ${this.token}`
      })
    })
  }

}
