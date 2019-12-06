import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  friends: User [];
  constructor() { 
    let user1: User = {
      nick:'user',
      subnick:'1',
      age:22,
      email:'user@gmail.com',
      friend:true,
      uid: 1
    };
    let user2: User = {
      nick:'carl',
      subnick:'1',
      age:19,
      email:'carl@gmail.com',
      friend:true,
      uid: 2
    };
    let user3: User = {
      nick:'Juan',
      subnick:'1',
      age:25,
      email:'juan@gmail.com',
      friend:false,
      uid: 3
    };
    let user4: User = {
      nick:'Ben',
      subnick:'1',
      age:19,
      email:'ben@gmail.com',
      friend:false,
      uid: 4
    };
    let user5: User = {
      nick:'Jhon',
      subnick:'1',
      age:30,
      email:'carl@gmail.com',
      friend:true,
      uid: 5
    };
    this.friends = [user1,user2,user3,user4,user5];
  }

  ngOnInit() {
  }

}
