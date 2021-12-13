import { Component, OnInit } from '@angular/core';
import { ModeloVeterinario } from 'src/app/modelos/veterinario.modelo';
import { VeterinarioService } from 'src/app/servicios/veterinario.service';

@Component({
  selector: 'app-buscar-veterinario',
  templateUrl: './buscar-veterinario.component.html',
  styleUrls: ['./buscar-veterinario.component.css']
})
export class BuscarVeterinarioComponent implements OnInit {

  listadoRegistrosVeterinario: ModeloVeterinario[] =[];

  constructor(private veterinarioServicio: VeterinarioService) { }

  ngOnInit(): void {
    this.ObtenerListaVeterinario();
  }

  ObtenerListaVeterinario(){
  this.veterinarioServicio.ObtenerRegistrosVeterinario().subscribe((datos:ModeloVeterinario[]) => {
    this.listadoRegistrosVeterinario = datos;
  })
}

}
