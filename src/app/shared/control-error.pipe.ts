import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'controlError',
})
export class ControlErrorPipe implements PipeTransform {
  transform(errors: { [key: string]: any }): string[] {
    return Object.keys(errors).map<string>((key) => {
      return typeof errors[key] === 'object'
        ? Object.keys(errors[key])[0] + ' is ' + errors[key][key]
        : key;
    });
  }
}
