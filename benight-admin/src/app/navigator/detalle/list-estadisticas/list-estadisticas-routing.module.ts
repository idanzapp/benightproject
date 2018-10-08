import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ListEstadisticasPage } from './list-estadisticas.page'

const routes: Routes = [
  {
    path: '',
    component: ListEstadisticasPage
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListEstadisticasRoutingModule { }