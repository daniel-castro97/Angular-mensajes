import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Status } from '../enums/enum';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  friends: User [];
  constructor() { 
    let user1: User = {
      nick:'user',
      subnick:'1',
      age:22,
      email:'user@gmail.com',
      friend:true,
      uid: 1,
      status: "online"
    };
    let user2: User = {
      nick:'carl',
      subnick:'1',
      age:19,
      email:'carl@gmail.com',
      friend:true,
      uid: 2,
      status:"offline"
    };
    let user3: User = {
      nick:'Juan',
      subnick:'1',
      age:25,
      email:'juan@gmail.com',
      friend:false,
      uid: 3,
      status:"away"
    };
    let user4: User = {
      nick:'Ben',
      subnick:'1',
      age:19,
      email:'ben@gmail.com',
      friend:false,
      uid: 4,
      status: "busy"
    };
    let user5: User = {
      nick:'Jhon',
      subnick:'1',
      age:30,
      email:'carl@gmail.com',
      friend:true,
      uid: 5,
      status: "offline"
    };
    this.friends = [user1,user2,user3,user4,user5];
  }
  getFriends(){
    return this.friends;
  }
}
