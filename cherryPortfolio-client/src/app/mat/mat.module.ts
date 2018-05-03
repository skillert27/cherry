import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// material components import
import { MaterialModules } from './mat-modules-index';


import { MatMainComponent } from './components/mat-main/mat-main.component';
import { MatRoutingModule,matRoutedComponents } from './mat-routing.module';



@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatRoutingModule,
    MaterialModules
  ],
  exports:[
    MatMainComponent
  ],
  declarations: [MatMainComponent,matRoutedComponents]
})
export class MatModule { }
