import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MatModule } from './mat/mat.module';
//import { CherryCoreModule } from './core/cherry-core.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MatModule,
    //CherryCoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
