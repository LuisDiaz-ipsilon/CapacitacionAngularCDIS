import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListasComponent } from './components/listas/listas.component';
import { VistasComponent } from './components/vistas/vistas.component';
import { TableComponent } from './components/table/table.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  { path: 'vistas', component: VistasComponent },
  { path: 'list', component: ListasComponent },
  { path: 'table', component: TableComponent },
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: '**', component:  NotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
