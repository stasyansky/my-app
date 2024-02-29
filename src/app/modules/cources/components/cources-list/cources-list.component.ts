import {
  AfterViewChecked,
  Component,
  OnInit,
  AfterContentChecked,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';
import {ICource} from "../../../../models/cource.model";
import {OrderByPipe} from "./pipes/order-by.pipe";
import {FilterPipe} from "./pipes/filter.pipe"

@Component({
  selector: 'app-cources-list',
  templateUrl: './cources-list.component.html',
  styleUrls: ['./cources-list.component.scss'],
  providers: [OrderByPipe, FilterPipe],
})

export class CourcesListComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{

  @Output() public loadMore: EventEmitter<any> = new EventEmitter<any>();
  cources: ICource[] = [];
  mockData: ICource[] = [];


  constructor(
    private orderByPipe: OrderByPipe,
    private filterPipe: FilterPipe,
  ) {}

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  public ngOnInit(): void {
    console.log('ngOnInit');
    this.mockData = [
      {
        "id": 1,
        "title": "Reprehenderit est veniam elit",
        "creationDate": "02.11.2024",
        "duration": 109,
        "description": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
        "topRated" : true,
      },
      {
        "id": 2,
        "title": "Мagna Excepteur aute Deserunt",
        "creationDate": "02.17.2024",
        "duration": 128,
        "description": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
        "topRated" : false,
      },
      {
        "id": 3,
        "title": "Reprehenderit eiusmod nostrud amet",
        "creationDate": "03.27.2024",
        "duration": 95,
        "description": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
        "topRated" : true,
      },
      {
        "id": 4,
        "title": "Sit voluptate eiusmod ea",
        "creationDate": "03.03.2025",
        "duration": 60,
        "description": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
        "topRated" : false,
      },
      {
        "id": 5,
        "title": "Duis mollit reprehenderit ad",
        "creationDate": "02.22.2024",
        "duration": 399,
        "description": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
        "topRated" : true,
      },
    ];

    this.cources = this.mockData;
    this.cources = this.orderByPipe.transform('creationDate', this.cources);
  }

  public editCource(cource: ICource): void {
    console.log({ editCource: cource.id });
  }

  public deleteCource(cource: ICource): void {
    console.log({ deleteCource: cource.id });
  }

  onSearch(value: string) {
    this.cources = this.filterPipe.transform(value, this.mockData);
  }

  public onClickLoadMoreBtn() {
    console.log('onClickLoadMoreButton');
  }

  public clearFilters() {
    console.log('clearFilters');
  }

  public ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  public ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  public ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  public ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  public ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  public ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
