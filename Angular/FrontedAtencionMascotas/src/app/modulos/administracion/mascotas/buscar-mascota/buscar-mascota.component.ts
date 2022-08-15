import { Component, OnInit } from '@angular/core';
import { ModeloMascota } from 'src/app/modelos/mascotas.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';

@Component({
  selector: 'app-buscar-mascota',
  templateUrl: './buscar-mascota.component.html',
  styleUrls: ['./buscar-mascota.component.css']
})
export class BuscarMascotaComponent implements OnInit {

listadoRegistrosMascota: ModeloMascota[] = [];


  constructor(private mascotaServicio: MascotaService) { }

  ngOnInit(): void {
    this.ObtenerListadoMascotas();
  }

  ObtenerListadoMascotas(){
    this.mascotaServicio.ObtenerRegistroMascota().subscribe((datos: ModeloMascota[]) =>{
      this.listadoRegistrosMascota = datos;
    })
  }

}
