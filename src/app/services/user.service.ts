import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Status } from '../enums/enum';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private angularFireDatabase : AngularFireDatabase) { 
   
  }
  getUsers(){
    return this.angularFireDatabase.list('/users');
  }

  getUserById(uid){
    return this.angularFireDatabase.object('/users/'+uid);
  }

  createUser(user){
    return this.angularFireDatabase.object('/users/'+user.uid).set(user);
  }

  editUser(user){
    return this.angularFireDatabase.object('/users/'+user.uid).set(user);
  }
  setAvatar(avatar, uid){
    return this.angularFireDatabase.object('/users/'+uid + '/avatar').set(avatar);
  }
}
