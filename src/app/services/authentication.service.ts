import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private auth:AngularFireAuth) { }

  loginEmail(email:string, password:string){
    this.auth.auth.signInWithEmailAndPassword(email,password);
  }
  registroEmail(email:string, password:string){
    this.auth.auth.createUserWithEmailAndPassword(email,password);
  }
  getStatus(){
    return this.auth.authState;
  }
  logout(){
    return this.auth.auth.signOut();
  }
}
