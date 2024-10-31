import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { ReporteComponent } from './pages/reporte/reporte.component';

const routes: Routes = [
  
  { path: 'Formulario', component: FormularioComponent },  // Ruta para el formulario
  { path: 'reporte', component: ReporteComponent },  // Ruta para el reporte
  { path: 'inicio', component: InicioComponent },
  { path: '**', component: LoginComponent },  // Ruta para el login
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Redirige a login por defecto
 // { path: '**', component: LoginComponent },  // Ruta para el login
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
