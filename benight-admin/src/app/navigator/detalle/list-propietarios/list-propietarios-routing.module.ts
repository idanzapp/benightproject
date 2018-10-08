import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ListPropietariosPage } from './list-propietarios.page'

const routes: Routes = [
  {
    path: '',
    component: ListPropietariosPage
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListPropietariosRoutingModule { }