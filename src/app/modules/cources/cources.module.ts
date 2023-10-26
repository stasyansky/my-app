import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourcesListComponent } from './components/cources-list/cources-list.component';
import { CourceComponent } from './components/cource/cource.component';



@NgModule({
  declarations: [
    CourcesListComponent,
    CourceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CourcesModule { }
