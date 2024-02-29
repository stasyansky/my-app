import { Pipe, PipeTransform } from '@angular/core';
import {ICource} from "../../../../../models/cource.model";

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(value: string, cources: ICource[]): ICource[] {
    return cources.filter(
      cource =>
        cource.title.toLowerCase().includes(value.toLowerCase())
    );
  }
}
