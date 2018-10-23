import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ListFechasPage } from '@bn8-imports/imports.views'

const routes: Routes = [
  {
    path: '',
    component: ListFechasPage,
    data:{
      header:'Fechas',
      back:false
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListFechasRoutingModule { }