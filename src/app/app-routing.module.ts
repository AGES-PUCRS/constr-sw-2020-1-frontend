import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { Grupo5Component } from './screens/grupo-5/grupo-5.component'
import {HomeComponent} from './screens/home/home.component'
import { StandardFormComponent } from './components/standard-form/standard-form.component';
import { RequestType } from './models/request-type.enum';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' },
  },
  {
    path: '**',
    redirectTo: 'home',
  },
  {
    path: 'grupo5',
    component: Grupo5Component
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
