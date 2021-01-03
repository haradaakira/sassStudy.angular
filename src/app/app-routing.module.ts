import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaincompComponent } from './maincomp/maincomp.component'

const routes: Routes = [
  { path: '', component: MaincompComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
