import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPropietario } from 'src/app/modelos/propietario.modelo';
import { PropietarioService } from 'src/app/servicios/propietario.service';

@Component({
  selector: 'app-editar-propietario',
  templateUrl: './editar-propietario.component.html',
  styleUrls: ['./editar-propietario.component.css']
})
export class EditarPropietarioComponent implements OnInit {
  
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
    this.Buscarpropietario();

  }

  Buscarpropietario(){
      this.servicioPropietario.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloPropietario) => {
          this.fgValidador.controls["id"].setValue(datos.id);  
          this.fgValidador.controls["nombres"].setValue(datos.Nombres);
          this.fgValidador.controls["apellidos"].setValue(datos.Apellidos);
          this.fgValidador.controls["identificacion"].setValue(datos.Identificacion);
          this.fgValidador.controls["telefono"].setValue(datos.Telefono);
          this.fgValidador.controls["direccion"].setValue(datos.Direccion);
          this.fgValidador.controls["correo"].setValue(datos.Correo);

      });
  }


  EditarPropietario() {
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
    this.servicioPropietario.ActualizarPropietario(prop).subscribe((datos: ModeloPropietario) => {
      alert("Cliente actualizado correctamente");
      this.router.navigate(["/administracion/buscar-propietario"]);
    }, (error: any) => {
      alert("Error al actualizar cliente");
    })

  }


}
