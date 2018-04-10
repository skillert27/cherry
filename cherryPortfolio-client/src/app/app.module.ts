import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CherryCoreModule } from './core/cherry-core.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    CherryCoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
