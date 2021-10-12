import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'workDuration'
})
export class ChangeDateMsPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    let dateStr = '';
    const duration = moment.duration(value);
    const config = [
      {method: 'years', postfix: ' г.'},
      {method: 'months', postfix: ' м.'},
      {method: 'days', postfix: ' д.'},
      {method: 'hours', postfix: ' ч.'},
      {method: 'minutes', postfix: ' мин.'},
      {method: 'seconds', postfix: ' сек.'},
    ];

    // for (let i = 0; i < config.length; i++) {
    //   if (args <= 0) {
    //     break;
    //   }
    //
    //   const item = config[i];
    //   const val = duration[item.method]();
    //   if (val > 0) {
    //     if (dateStr !== '') {
    //       dateStr += ' ';
    //     }
    //     dateStr += val + item.postfix;
    //     if (args) {
    //       args--;
    //     }
    //   }
    // }

    return dateStr;
  }

}
