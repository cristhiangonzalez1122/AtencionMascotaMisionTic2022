import { Component, OnInit } from '@angular/core';
import { ModeloPropietario } from 'src/app/modelos/propietario.modelo';
import { PropietarioService } from 'src/app/servicios/propietario.service';

@Component({
  selector: 'app-buscar-propietario',
  templateUrl: './buscar-propietario.component.html',
  styleUrls: ['./buscar-propietario.component.css']
})
export class BuscarPropietarioComponent implements OnInit {

  listadoRegistrosPropietario: ModeloPropietario[] =[];

  constructor(private propietarioServicio: PropietarioService) { }

  ngOnInit(): void {
    this.ObtenerListaPropietarios();
  }

ObtenerListaPropietarios(){
  this.propietarioServicio.ObtenerRegistros().subscribe((datos:ModeloPropietario[]) => {
    this.listadoRegistrosPropietario = datos;
  })
}

}
