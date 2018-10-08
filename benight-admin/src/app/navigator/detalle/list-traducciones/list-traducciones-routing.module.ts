import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ListTraduccionesPage } from './list-traducciones.page'

const routes: Routes = [
  {
    path: '',
    component: ListTraduccionesPage
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListTraduccionesRoutingModule { }