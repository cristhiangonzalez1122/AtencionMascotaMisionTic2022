import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  seInicioSesion: boolean = false;
  subs: Subscription = new Subscription();


  constructor(private seguridadServicio:SeguridadService) { }

  ngOnInit(): void {
    this.subs = this.seguridadServicio.ObtenerDatosUsuariosEnSesion().subscribe((datos:ModeloIdentificar) =>{
      this.seInicioSesion = datos.estaIdentificado;
    })

  }

}
