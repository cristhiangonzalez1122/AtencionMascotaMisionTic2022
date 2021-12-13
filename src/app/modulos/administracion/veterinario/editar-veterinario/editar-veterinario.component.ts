import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloVeterinario } from 'src/app/modelos/veterinario.modelo';
import { VeterinarioService } from 'src/app/servicios/veterinario.service';

@Component({
  selector: 'app-editar-veterinario',
  templateUrl: './editar-veterinario.component.html',
  styleUrls: ['./editar-veterinario.component.css']
})
export class EditarVeterinarioComponent implements OnInit {

  id: string = '';
  fgValidador1: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'identificacion': ['', [Validators.required]],
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'telefono': ['', [Validators.required]],
    'tarjetaProfesional': ['', [Validators.required]],
    'correo': ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder,
    private servicioVeterinario: VeterinarioService,
    private router: Router,
    private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarVeterinario();
  }

  BuscarVeterinario(){
      this.servicioVeterinario.ObtenerRegistrosVetPorId(this.id).subscribe((datos: ModeloVeterinario) => {
          this.fgValidador1.controls["id"].setValue(datos.id);  
          this.fgValidador1.controls["nombres"].setValue(datos.Nombres);
          this.fgValidador1.controls["apellidos"].setValue(datos.Apellidos);
          this.fgValidador1.controls["identificacion"].setValue(datos.Identificacion);
          this.fgValidador1.controls["telefono"].setValue(datos.Telefono);
          this.fgValidador1.controls["tarjetaProfesional"].setValue(datos.TarjetaProfesional);
          this.fgValidador1.controls["correo"].setValue(datos.Correo);

      });
  }

  EditarVeterinario() {
    let identificacion = this.fgValidador1.controls["identificacion"].value;
    let nombres = this.fgValidador1.controls["nombres"].value;
    let apellidos = this.fgValidador1.controls["apellidos"].value;
    let telefono = this.fgValidador1.controls["telefono"].value;
    let tarjetaProfesional = this.fgValidador1.controls["tarjetaProfesional"].value;
    let correo = this.fgValidador1.controls["correo"].value;
    let prop = new ModeloVeterinario();
    prop.id = this.id;
    prop.Identificacion = identificacion;
    prop.Nombres = nombres;
    prop.Apellidos = apellidos;
    prop.Telefono = telefono;
    prop.TarjetaProfesional = tarjetaProfesional;
    prop.Correo = correo;
    this.servicioVeterinario.ActualizarVeterinario(prop).subscribe((datos: ModeloVeterinario) => {
      alert("Veterinario actualizado correctamente");
      this.router.navigate(["/administracion/buscar-veterinario"]);
    }, (error: any) => {
      alert("Error al actualizar Veterinario");
    })

  }



}
