import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  operation: string = 'login';
  email:string=null;
  password:string= null;
  nick:string=null;
  constructor( private autenticacion:AuthenticationService, private userService: UserService,
              private router: Router) { }
  
  ngOnInit() { }

  login(){
   this.autenticacion.loginEmail(this.email, this.password).then(
    (data) => {
        alert('Ingreso correcto');
        console.log(data);
        //data.user.status='';
        this.router.navigate(['home']);
      }
    ).catch((error) => {
       alert('Hubo un error');
        console.log(error);
      
   });
  }
  registro(){
    this.autenticacion.registroEmail(this.email, this.password).then(
     (data) => {
       const user = {
         uid: data.user.uid,
         email: this.email,
         nick: this.nick
       };
       this.userService.createUser(user).then(
         (data2)=>{
          alert('Registro correcto');
         console.log(data2);
         }
       ).catch( (error)=>{
        alert('Hubo un error');
        console.log(error);
       });
       }
     ).catch((error) => {
        alert('Hubo un error');
         console.log(error);
    });
   }
}
