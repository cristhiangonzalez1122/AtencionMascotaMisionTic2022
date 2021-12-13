import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloVeterinario } from 'src/app/modelos/veterinario.modelo';
import { VeterinarioService } from 'src/app/servicios/veterinario.service';

@Component({
  selector: 'app-eliminar-veterinario',
  templateUrl: './eliminar-veterinario.component.html',
  styleUrls: ['./eliminar-veterinario.component.css']
})
export class EliminarVeterinarioComponent implements OnInit {

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
    private servicioVeterinario: VeterinarioService,
    private router: Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BorrarVeterinario();
  }

  BorrarVeterinario() {
    let identificacion = this.fgValidador.controls["identificacion"].value;
    let nombres = this.fgValidador.controls["nombres"].value;
    let apellidos = this.fgValidador.controls["apellidos"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    let tarjetaProfesional = this.fgValidador.controls["tarjetaProfesional"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let vet = new ModeloVeterinario();
    vet.id = this.id;
    vet.Identificacion = identificacion;
    vet.Nombres = nombres;
    vet.Apellidos = apellidos;
    vet.Telefono = telefono;
    vet.TarjetaProfesional = tarjetaProfesional;
    vet.Correo = correo;
    this.servicioVeterinario.EliminarVeterinario(vet.id).subscribe((datos: ModeloVeterinario) => {
      alert("Cliente eliminado correctamente");
      this.router.navigate(["/administracion/buscar-propietario"]);
    }, (error: any) => {
      alert("Error al eliminar cliente");
    })
  }


}
