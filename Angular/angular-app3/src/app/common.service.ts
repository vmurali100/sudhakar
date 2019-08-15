import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  sendData = new Subject();
  sendData1 = new Subject();
  sendData2 = new Subject();
  constructor(private _http: HttpClient) {}

  exchangeData(data) {
    this.sendData.next(data);
  }

  exchangeObj(data) {
    this.sendData1.next(data);
  }

  exchangeArray(data) {
    this.sendData2.next(data);
  }

  getDataForHome() {
    return this._http.get("http://localhost:3000/users");
  }
}
