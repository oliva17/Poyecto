import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {

  registro = {
    nombre: '',
    apellido: '',
    telefono: '',
    parentesco: '',
    correo: '',
    direccion: '',
    carnetPasaporte: '',
    nombreExtranjero: '',
    apellidoExtranjero: '',
    telefonoExtranjero: '',
    direccionExtranjero: '',
    parentescoExtranjero: '',
    dniNie: '',
    correoExtranjero: ''
  };
  router: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    localStorage.setItem('registro', JSON.stringify(this.registro));
    this.router.navigate(['/reporte']);
  }

}
