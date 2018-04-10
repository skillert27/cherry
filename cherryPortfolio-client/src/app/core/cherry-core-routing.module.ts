import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  CherryMainComponent,
  CherryAboutComponent,
  CherryLoginComponent,
  CherryRegisterComponent
} from './components/index';

const routes: Routes = [
  { path : '',component:CherryMainComponent},
  { path : 'home',component:CherryMainComponent},
  { path : 'about',component:CherryAboutComponent},
  { path : 'register',component:CherryRegisterComponent},
  { path : 'login',component:CherryLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CherryCoreRoutingModule { }

export const coreRoutedComponents = [
  CherryMainComponent,
  CherryAboutComponent,
  CherryLoginComponent,
  CherryRegisterComponent
];
