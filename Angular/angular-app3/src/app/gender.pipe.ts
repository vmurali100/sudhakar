import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "gender"
})
export class GenderPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    console.log(args);
    if (value == "Male") {
      return "Mr." + args[0].fname;
    } else {
      return "Mrs. " + args[0].fname;
    }
  }
}
