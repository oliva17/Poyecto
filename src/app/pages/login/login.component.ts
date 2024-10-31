import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importar el Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  constructor(private router: Router) { } // Inyectar el Router

  onLogin() {
    if (this.loginData.email && this.loginData.password) {
      // Aquí normalmente se haría la validación del login, como una llamada a un servicio
      // Simulamos un login exitoso:
      console.log('Login exitoso');

      // Redirigir a la página de inicio
      this.router.navigate(['/inicio']);
    } else {
      console.log('Credenciales inválidas');
    }
  }
}
