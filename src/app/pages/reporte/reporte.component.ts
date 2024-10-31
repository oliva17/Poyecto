import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss']
})
export class ReporteComponent implements OnInit {
  registro: any;

  ngOnInit() {
    // Obtener los datos del formulario guardados en localStorage
    this.registro = JSON.parse(localStorage.getItem('registro') || '{}');
  }
}
