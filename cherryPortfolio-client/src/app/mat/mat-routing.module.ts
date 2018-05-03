import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  MatRegisterComponent,
  MatLoginComponent,
  MatAboutmeComponent,
} from './components/index';

const routes: Routes = [
  { path : '',component:MatAboutmeComponent},
  { path : 'register',component:MatRegisterComponent},
  { path : 'login',component:MatLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MatRoutingModule { }

export const matRoutedComponents = [
  MatRegisterComponent,
  MatLoginComponent,
  MatAboutmeComponent,
];
