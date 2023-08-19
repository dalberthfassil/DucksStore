import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addUnits',
})
export class AddUnitsPipe implements PipeTransform {
  transform(value: number): string {
    return `${value} ${value > 1 ? 'uds.' : 'ud.'} `;
  }
}
