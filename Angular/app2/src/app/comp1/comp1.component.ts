import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  users: string[];

  constructor() { }

  ngOnInit() {
    // this.users = data;
  }

  showUsers(){
    this.users = data;
  }

  removeLast(){
    this.users.pop()

  }
  removeFirst(){
    this.users.shift()

  }
  addUser(){
    this.users.push("Hema")
  }

}


const data = ["Murali","Abdul","Sudhakar","Thangamani"]