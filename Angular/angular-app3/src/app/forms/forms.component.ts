import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  user: any ={
    "FirstName":"",
    "LastName":"",
    "Email":"",
    "id":null
  };
  data: Object;

  constructor(private _http:HttpClient) { }

  ngOnInit() {
    this._http.get('http://localhost:3000/asha').subscribe((response)=>{
      this.data = response;
    })
  }
  getValues(my){
    my.value.id=null
    console.log(my.value)
    this._http.post('http://localhost:3000/asha',my.value).subscribe((resposne)=>{
      console.log("User Added")
      this._http.get('http://localhost:3000/asha').subscribe((response)=>{
        this.data = response;
      })
    })
  }

  deleteUser(obj){
    this._http.delete('http://localhost:3000/asha/'+obj.id).subscribe((resposne)=>{
      this._http.get('http://localhost:3000/asha').subscribe((response)=>{
        this.data = response;
      })
    })

  }

  editUser(obj){
    this.user=obj
  }

  updateUser(){
    this._http.put('http://localhost:3000/asha/'+this.user.id,this.user).subscribe((resposne)=>{
      this._http.get('http://localhost:3000/asha').subscribe((response)=>{
        this.data = response;
      })
    })
  }
}
