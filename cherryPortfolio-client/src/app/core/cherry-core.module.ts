import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CherryCoreRoutingModule,coreRoutedComponents } from './cherry-core-routing.module';
import { CherryHeaderComponent,CherryNavComponent,CherryFooterComponent} from './components/index';
import { HoverButtonComponent } from './shared/index';

@NgModule({
  imports: [
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
    CherryCoreRoutingModule
  ],
  exports : [
      CherryHeaderComponent,CherryNavComponent,CherryFooterComponent
  ],
  declarations: [CherryHeaderComponent,CherryNavComponent,
    CherryFooterComponent,coreRoutedComponents,
    HoverButtonComponent]
})
export class CherryCoreModule { }
