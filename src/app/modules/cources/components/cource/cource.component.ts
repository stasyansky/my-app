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
}
