import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {
  data: unknown;
  objFromSibling1;
  keys: string[];
  arrayFromSibling1: unknown;

  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.commonService.sendData.subscribe((res)=>{
        this.data = res
    })

    this.commonService.sendData1.subscribe((objres)=>{
      this.objFromSibling1 = objres;
      this.keys = Object.keys(this.objFromSibling1)

    })

    this.commonService.sendData2.subscribe((arrayres)=>{
      this.arrayFromSibling1 = arrayres;

    })
  }

}
