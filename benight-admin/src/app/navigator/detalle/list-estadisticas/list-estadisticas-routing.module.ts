import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ListEstadisticasPage } from '@bn8-imports/imports.views'

const routes: Routes = [
  {
    path: '',
    component: ListEstadisticasPage,
    data:{
      header:'Estadisticas',
      back:true
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListEstadisticasRoutingModule { }