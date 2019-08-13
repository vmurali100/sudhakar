import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {
  message="I am Coming From Sibling1"

  obj = {
    fname:'Asha',
    lname:'Rajan'
  }

  constructor(private commonService:CommonService) { }

  ngOnInit() {
  }
  sendDataToSibling2(){
    this.commonService.exchangeData(this.message)
  }

  sendObjToSibling2(){
    console.log("Object called")
    this.commonService.exchangeObj(this.obj)
  }

  sendArrayToSibling2(){
    this.commonService.exchangeArray(users)
  }
}
let users = [
  {
      "id": 1237,
      "email": "CChristopher@tortor.org",
      "username": "EJordan",
      "password": "7ebhg"
  },
  {
      "id": 1238,
      "email": "MChang@ipsum.gov",
      "username": "GMarr",
      "password": "si7CE"
  },
  {
      "id": 1239,
      "email": "YStart@ante.io",
      "username": "JKaiser",
      "password": "qPgP5"
  }
]
