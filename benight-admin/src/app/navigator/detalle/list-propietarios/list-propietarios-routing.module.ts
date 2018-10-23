import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ListPropietariosPage } from '@bn8-imports/imports.views'

const routes: Routes = [
  {
    path: '',
    component: ListPropietariosPage,
    data:{
      header:'Propietarios',
      back:false
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListPropietariosRoutingModule { }