import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {
  messagefromSib1: {};

  constructor(private common:CommonService) { }

  ngOnInit() {
    this.common.passInfo.subscribe((fromSib)=>{
      this.messagefromSib1= fromSib
      console.log(this.messagefromSib1)
    })
  }

}
