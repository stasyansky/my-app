import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CourcesListComponent} from './components/cources-list/cources-list.component';
import {CourceComponent} from './components/cource/cource.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {CoreModule} from "../core/core.module";


@NgModule({
  declarations: [
    CourcesListComponent,
    CourceComponent
  ],
  exports: [
    CourcesListComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    CoreModule
  ]
})
export class CourcesModule {
}
