import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddWellComponent } from './AddWell/add-well/add-well.component';
import { WellListComponent } from './well-list/well-list.component';

const routes: Routes = [
  {path:'new-well', component:AddWellComponent},
  {path:'', component:WellListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
