import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  operation: string = 'login';
  constructor( private autenticacion:AuthenticationService) { }
  email:string=null;
  password:string= null;
  ngOnInit() { }

  login(){
    this.autenticacion.loginEmail(this.email, this.password).then(
      (data) => {
        alert('Ingreso correcto');
        console.log(data);
      }
    ).catch((error) => {
       alert('Hubo un error');
        console.log(error);
      
    });
  }

}
