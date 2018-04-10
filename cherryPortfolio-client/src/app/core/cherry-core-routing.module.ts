import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CherryMainComponent} from './components/index';
import { CherryAboutComponent} from './components/index';

const routes: Routes = [
  { path : '',component:CherryMainComponent},
  { path : 'about',component:CherryAboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CherryCoreRoutingModule { }

export const coreRoutedComponents = [CherryMainComponent,CherryAboutComponent];
