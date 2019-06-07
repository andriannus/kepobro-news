import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'date',
})

export class DatePipe implements PipeTransform {
  transform(date: string) {
    if (!date) {
      return false;
    }

    let formattedDate = '';

    moment.locale('id');
    formattedDate = moment(date).format('dddd, Do MMMM YYYY · h:mm');

    return formattedDate;
  }
}
