import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloVeterinario } from 'src/app/modelos/veterinario.modelo';
import { VeterinarioService } from 'src/app/servicios/veterinario.service';

@Component({
  selector: 'app-crear-veterinario',
  templateUrl: './crear-veterinario.component.html',
  styleUrls: ['./crear-veterinario.component.css']
})
export class CrearVeterinarioComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'identificacion': ['', [Validators.required]],
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'telefono': ['', [Validators.required]],
    'tarjetaProfesional': ['', [Validators.required]],
    'correo': ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder,
    private servicioVeterinario: VeterinarioService,
    private router: Router) { }


  ngOnInit(): void {

  }

  GuardarVeterinario() {
    let identificacion = this.fgValidador.controls["identificacion"].value;
    let nombres = this.fgValidador.controls["nombres"].value;
    let apellidos = this.fgValidador.controls["apellidos"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    let tarjetaProfesional = this.fgValidador.controls["tarjetaProfesional"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let vet = new ModeloVeterinario();
    vet.Identificacion = identificacion;
    vet.Nombres = nombres;
    vet.Apellidos = apellidos;
    vet.Telefono = telefono;
    vet.TarjetaProfesional = tarjetaProfesional;
    vet.Correo = correo;
    this.servicioVeterinario.CrearVeterinario(vet).subscribe((datos: ModeloVeterinario) => {
      alert("El Veterinario fue almacenado correctamente");
      this.router.navigate(["/administracion/buscar-veterinario"]);
    }, (error: any) => {
      alert("Error almacenado veterinario");
    })

  }

}
