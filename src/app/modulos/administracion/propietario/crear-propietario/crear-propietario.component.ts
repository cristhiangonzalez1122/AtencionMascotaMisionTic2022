import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloPropietario } from 'src/app/modelos/propietario.modelo';
import { PropietarioService } from 'src/app/servicios/propietario.service';

@Component({
  selector: 'app-crear-propietario',
  templateUrl: './crear-propietario.component.html',
  styleUrls: ['./crear-propietario.component.css']
})
export class CrearPropietarioComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'identificacion': ['', [Validators.required]],
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'telefono': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'correo': ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder,
    private servicioPropietario: PropietarioService,
    private router: Router) { }


  ngOnInit(): void {

  }

  GuardarPropietario() {
    let identificacion = this.fgValidador.controls["identificacion"].value;
    let nombres = this.fgValidador.controls["nombres"].value;
    let apellidos = this.fgValidador.controls["apellidos"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    let direccion = this.fgValidador.controls["direccion"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let prop = new ModeloPropietario();
    prop.Identificacion = identificacion;
    prop.Nombres = nombres;
    prop.Apellidos = apellidos;
    prop.Telefono = telefono;
    prop.Direccion = direccion;
    prop.Correo = correo;
    this.servicioPropietario.CrearPropietario(prop).subscribe((datos: ModeloPropietario) => {
      alert("Cliente almacenado correctamente");
      this.router.navigate(["/administracion/buscar-propietario"]);
    }, (error: any) => {
      alert("Error almacenado cliente");
    })


  }


}
