import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ListFechasPage } from './list-fechas.page'

const routes: Routes = [
  {
    path: '',
    component: ListFechasPage
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListFechasRoutingModule { }