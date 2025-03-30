import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isloggingId: boolean = false;
  
  //Incluir logica de inicio de sesion aqui
  //por ejemplo, un servicio de autenticacion
  //y un metodo para iniciar sesion 
  //y otro para cerrar sesion
  //y un metodo para verificar si el usuario esta logueado
  //y un metodo para obtener el nombre de usuario
  //y un metodo para obtener el rol de usuario
  //y un metodo para obtener el id de usuario
  //y un metodo para obtener el token de usuario
  //y un metodo para obtener el tiempo de expiracion
  // authorization -> firebase -> auth -> user
  
  toggleLogin() {
    this.isloggingId = !this.isloggingId;
  }
}
