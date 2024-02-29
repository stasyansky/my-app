import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationCource'
})
export class DurationCourcePipe implements PipeTransform {

  transform(duration: number): string {
    if (duration < 60) {
      return `${duration} минут`;
    } else if (duration === 60) {
      return '1 час';
    } else {
      const ending = Math.trunc(duration / 60) === 1
        ? ''
        : Math.trunc(duration / 60) > 1 && Math.trunc(duration / 60) < 5
          ? 'а'
          : 'ов';

      return `${Math.trunc(duration / 60)} час${ending} ${duration % 60} минут`
    }
  }

}
