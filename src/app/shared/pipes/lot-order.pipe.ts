import { Pipe, PipeTransform } from '@angular/core';
import { Ducks } from 'src/app/core/modules/ducks.interface';

@Pipe({
  name: 'lotOrder',
})
export class LotOrderPipe implements PipeTransform {
  transform(ducks: Ducks[], order: 'asc' | 'desc'): Ducks[] {
    return ducks.sort((a, b) => {
      if (order === 'asc') {
        return a.lot - b.lot;
      } else {
        return b.lot - a.lot;
      }
    });
  }
}
