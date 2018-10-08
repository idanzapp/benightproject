import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ListListasPage } from './list-listas.page'

const routes: Routes = [
  {
    path: '',
    component: ListListasPage
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListListasRoutingModule { }