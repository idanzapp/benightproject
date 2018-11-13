import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ListEntradasPage } from '@bn8-imports/imports.views'

const routes: Routes = [
  {
    path: '',
    component: ListEntradasPage,
    data:{
      header:'Entradas',
      back:true
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListEntradasRoutingModule { }