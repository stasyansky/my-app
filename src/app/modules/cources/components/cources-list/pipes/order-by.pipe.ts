import {Pipe, PipeTransform} from '@angular/core';
import {ICource} from "../../../../../models/cource.model";

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(field: keyof ICource, courses: ICource[]): ICource[] {
    if (field === 'creationDate') {
      return courses.sort(
        (a, b) =>
          new Date(a[field]).getTime() > new Date(b[field]).getTime() ? 1 : -1
      );
    }
    return courses.sort((a, b) => a[field] > b[field] ? 1 : -1);
  }
}
