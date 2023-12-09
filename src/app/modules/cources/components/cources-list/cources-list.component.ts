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
  SimpleChanges
} from '@angular/core';
import {ICource} from "../../../../models/cource.model";

@Component({
  selector: 'app-cources-list',
  templateUrl: './cources-list.component.html',
  styleUrls: ['./cources-list.component.scss']
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
  public cources: ICource[] = [];

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  public ngOnInit(): void {
    console.log('ngOnInit');
    this.cources = [
      {
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "creationDate": "12.10.2023",
        "duration": 100,
        "description": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "id": 2,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "creationDate": "12.14.2023",
        "duration": 120,
        "description": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "id": 3,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "creationDate": "12.15.2023",
        "duration": 90,
        "description": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "id": 4,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "creationDate": "12.17.2023",
        "duration": 160,
        "description": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "id": 5,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "creationDate": "12.22.2023",
        "duration": 190,
        "description": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
      },
    ];
  }

  public loadMoreItems(): void {
    console.log('loadMoreItems');
  }

  public editCource(cource: ICource): void {
    console.log({ editCource: cource.id });
  }

  public deleteCource(cource: ICource): void {
    console.log({ deleteCource: cource.id });
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
