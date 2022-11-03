import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gamecodigo'
})
export class GamecodigoPipe implements PipeTransform {

  transform(value: string): string {
    if (value && value.length === 12) {
      return `${value.substr(0,3)}-${value.substr(3,3)}-${value.substr(6,3)}-${value.substr(9,3)}`;
    }
    else {
      return "Código Incorreto"

    }
  }

}
