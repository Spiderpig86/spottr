import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe for formatting MS into hours, minutes, and seconds.
 *
 * @export
 * @class TimestampPipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: 'timestamp',
})
export class TimestampPipe implements PipeTransform {
  transform(value: number) {
    let seconds = Math.floor(value / 1000);
    let minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    let hour = Math.floor(minute / 60);
    minute = minute % 60;

    let time = `${minute.toString()}:${seconds.toString().padStart(2, '0')}`;
    if (hour) {
      time = `${hour}:${time}`;
    }
    return time;
  }
}
