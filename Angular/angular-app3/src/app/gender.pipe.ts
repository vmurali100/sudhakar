import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "gender"
})
export class GenderPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    console.log(value);
    if (value == "Male") {
      return "Mr";
    } else {
      return "Mrs";
    }
  }
}
