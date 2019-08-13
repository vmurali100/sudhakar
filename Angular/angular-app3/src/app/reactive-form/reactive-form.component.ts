import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.css"]
})
export class ReactiveFormComponent implements OnInit {
  myForm = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl()
  });
  constructor() {}

  ngOnInit() {}

  addUser() {
    console.log(this.myForm.value);
  }
}
