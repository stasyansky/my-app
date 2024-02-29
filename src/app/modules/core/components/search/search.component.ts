import {
  Component,
  EventEmitter,
  Output,
  Input
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {
  @Input() value: string = '';
  @Output() onSearchCources: EventEmitter<string> = new EventEmitter<string>();

  onSearchValueChange(text: string) {
    this.value = text;
  }

  onSearch() {
    this.onSearchCources.emit(this.value)
  }
}
