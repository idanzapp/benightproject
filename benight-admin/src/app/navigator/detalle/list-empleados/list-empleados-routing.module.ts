import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ListEmpleadosPage } from '@bn8-imports/imports.views'

const routes: Routes = [
  {
    path: '',
    component: ListEmpleadosPage,
    data:{
      header:'Empleados',
      back:true
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListEmpleadosRoutingModule { }