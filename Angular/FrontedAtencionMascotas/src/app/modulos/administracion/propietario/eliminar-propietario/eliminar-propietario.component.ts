import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPropietario } from 'src/app/modelos/propietario.modelo';
import { PropietarioService } from 'src/app/servicios/propietario.service';

@Component({
  selector: 'app-eliminar-propietario',
  templateUrl: './eliminar-propietario.component.html',
  styleUrls: ['./eliminar-propietario.component.css']
})
export class EliminarPropietarioComponent implements OnInit {

  id: string = '';
  fgValidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'identificacion': ['', [Validators.required]],
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'telefono': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'correo': ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder,
    private servicioPropietario: PropietarioService,
    private router: Router,
    private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BorrarPropietario();
  }


  BorrarPropietario() {
    let identificacion = this.fgValidador.controls["identificacion"].value;
    let nombres = this.fgValidador.controls["nombres"].value;
    let apellidos = this.fgValidador.controls["apellidos"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    let direccion = this.fgValidador.controls["direccion"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let prop = new ModeloPropietario();
    prop.id = this.id;
    prop.Identificacion = identificacion;
    prop.Nombres = nombres;
    prop.Apellidos = apellidos;
    prop.Telefono = telefono;
    prop.Direccion = direccion;
    prop.Correo = correo;
    this.servicioPropietario.EliminarPropietario(prop.id).subscribe((datos: ModeloPropietario) => {
      alert("Cliente eliminado correctamente");
      this.router.navigate(["/administracion/buscar-propietario"]);
    }, (error: any) => {
      alert("Error al eliminar cliente");
    })
  }
}
