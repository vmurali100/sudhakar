import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-comp',
  templateUrl: './http-comp.component.html',
  styleUrls: ['./http-comp.component.css']
})
export class HttpCompComponent implements OnInit {
  dataTosendChildObj: any;
  dataTosendChildArray: any;

  constructor(private _http:HttpClient) { }
  datafromHttp;
  dataTosendChild;
  objKeys
  getArray(){
    this._http.get('http://localhost:3000/asha').subscribe((response)=>{
      this.datafromHttp=response
      this.dataTosendChild = response[0].FirstName
      this.dataTosendChildObj = response[0]
      this.dataTosendChildArray = response

    })
  }
  ngOnInit() {
  }

}
