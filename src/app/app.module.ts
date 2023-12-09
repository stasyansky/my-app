import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CoreModule} from "./modules/core/core.module";
import {CourcesModule} from "./modules/cources/cources.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CourcesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
