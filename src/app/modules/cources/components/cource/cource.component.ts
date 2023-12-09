import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ICource} from "../../../../models/cource.model";

@Component({
  selector: 'app-cource',
  templateUrl: './cource.component.html',
  styleUrls: ['./cource.component.scss']
})
export class CourceComponent {
  @Input() public cource: ICource = {} as ICource;
  @Output() public edit: EventEmitter<ICource> = new EventEmitter<ICource>();
  @Output() public delete: EventEmitter<ICource> = new EventEmitter<ICource>();

  public getTextTime(duration: number): string {
    if (duration < 60) {
      return `${duration}м`;
    } else if (duration === 60) {
      return '1ч';
    } else {
      return `${Math.trunc(duration / 60)} часа ${duration % 60} минуты`
    }
  }

  public getDateTextFormat(date: string): string {
    const dateInstance = new Date(date);

    const options: any = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return new Intl.DateTimeFormat("ru-RU", options).format(dateInstance);
  }
}
