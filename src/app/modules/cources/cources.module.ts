import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CourcesListComponent} from './components/cources-list/cources-list.component';
import {CourceComponent} from './components/cource/cource.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {CoreModule} from "../core/core.module";
import {DurationCourcePipe} from './components/cource/pipes/duration-cource.pipe';
import {BorderColorDirective} from './components/cource/directives/border-color.directive';
import {OrderByPipe} from './components/cources-list/pipes/order-by.pipe';
import {FilterPipe} from './components/cources-list/pipes/filter.pipe';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CourcesListComponent,
    CourceComponent,
    DurationCourcePipe,
    BorderColorDirective,
    OrderByPipe,
    FilterPipe
  ],
  exports: [
    CourceComponent,
    CourcesListComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    CoreModule,
    FormsModule
  ]
})
export class CourcesModule {
}
