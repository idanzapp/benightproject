import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ListPublicoPage } from './list-publico.page'

const routes: Routes = [
  {
    path: '',
    component: ListPublicoPage
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListPublicoRoutingModule { }