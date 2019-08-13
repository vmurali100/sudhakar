import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-http',
  templateUrl: './child-http.component.html',
  styleUrls: ['./child-http.component.css']
})
export class ChildHttpComponent implements OnInit {

  @Input() receiveFromParentString;
  @Input() receiveFromParentObj;
  @Input() receiveFromParentArray;

  @Output() sendData = new EventEmitter()

  msgFromchildhttp = "Welcome to child Http"
  objKeys: string[];
  constructor() { }

  ngOnInit() {
    this.objKeys = Object.keys(obj)
    console.log(this.receiveFromParentString)
  }

}


let obj={
  "id":null,
  "FirstName":"",
  "LastName" : "",
  "Email": ""
}