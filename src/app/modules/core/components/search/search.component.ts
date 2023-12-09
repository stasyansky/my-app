import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  value: string | undefined;

  public onClickSearchBtn() {
    console.log('onClickSearchBtn:', this.value);
  }
}
