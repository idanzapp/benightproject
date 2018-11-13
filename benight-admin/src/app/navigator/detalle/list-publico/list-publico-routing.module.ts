import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ListPublicoPage } from '@bn8-imports/imports.views'

const routes: Routes = [
  {
    path: '',
    component: ListPublicoPage,
    data:{
      header:'Publico',
      back:true
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListPublicoRoutingModule { }