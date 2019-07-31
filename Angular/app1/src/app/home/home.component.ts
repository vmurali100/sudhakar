import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  message = "Welcome to Home Component"
  person ={
    fname:"Murali",
    lname:"krishna",
    email:"vmurali100@gmail.com",
    city:"Banalore"
  }
  objValues;

  ngOnInit(){
    this.objValues= Object.keys(this.person)
    console.log(this.objValues)
  }

}
