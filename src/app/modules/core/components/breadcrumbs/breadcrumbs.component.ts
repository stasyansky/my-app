import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})

export class BreadcrumbsComponent implements OnInit {
  @Input() items: MenuItem[] = [];
  @Input() homeIcon: MenuItem = {} as MenuItem;

  ngOnInit() {
    this.items = [{label: 'Курсы'}];
    this.homeIcon = {icon: 'pi pi-home'};
  }
}
