import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ListRequisitosPage } from '@bn8-imports/imports.views'

const routes: Routes = [
  {
    path: '',
    component: ListRequisitosPage,
    data:{
      header:'Requisitos',
      back:true
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRequisitosRoutingModule { }