import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  passInfo = new Subject;
  constructor() { }
  exchangeData(msg){
    this.passInfo.next(msg)
  }
}
