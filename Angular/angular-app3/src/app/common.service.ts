import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  sendData = new Subject
  sendData1 = new Subject
  sendData2 = new Subject
  constructor() { }

  exchangeData(data){
    this.sendData.next(data)
  }

  exchangeObj(data){
    this.sendData1.next(data)
  }

  exchangeArray(data){
    this.sendData2.next(data)
  }
}
