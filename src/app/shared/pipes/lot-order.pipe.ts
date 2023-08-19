import { Pipe, PipeTransform } from '@angular/core';
import { Ducks, OrderType } from 'src/app/core/modules/ducks.interface';

@Pipe({
  name: 'lotOrder',
})
export class LotOrderPipe implements PipeTransform {
  transform(ducks: Ducks[], order: OrderType): Ducks[] {
    return ducks.sort((a, b) => {
      if (order === OrderType.asendente) {
        return a.lot - b.lot;
      } else {
        return b.lot - a.lot;
      }
    });
  }
}
