import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colour'
})
export class ColourPipe implements PipeTransform {

  transform(value: string): string {
    return `${value}`;
  }

}
