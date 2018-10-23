import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ListListasPage } from '@bn8-imports/imports.views'

const routes: Routes = [
  {
    path: '',
    component: ListListasPage,
    data:{
      header:'Listas',
      back:false
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListListasRoutingModule { }