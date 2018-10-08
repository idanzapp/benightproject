import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ListRequisitosPage } from './list-requisitos.page'

const routes: Routes = [
  {
    path: '',
    component: ListRequisitosPage
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRequisitosRoutingModule { }