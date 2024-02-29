import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {LogoComponent} from './components/logo/logo.component';
import {FooterComponent} from './components/footer/footer.component';
import {BreadcrumbsComponent} from './components/breadcrumbs/breadcrumbs.component';
import {SearchComponent} from './components/search/search.component';
import {AddButtonComponent} from './components/add-button/add-button.component';
import {BreadcrumbModule} from "primeng/breadcrumb";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";


@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    FooterComponent,
    BreadcrumbsComponent,
    SearchComponent,
    AddButtonComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    AddButtonComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    FormsModule,
    InputTextModule,
    ButtonModule
  ]
})
export class CoreModule {}
