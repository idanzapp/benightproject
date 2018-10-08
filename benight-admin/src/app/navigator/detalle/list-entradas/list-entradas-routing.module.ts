import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ListEntradasPage } from './list-entradas.page'

const routes: Routes = [
  {
    path: '',
    component: ListEntradasPage
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListEntradasRoutingModule { }