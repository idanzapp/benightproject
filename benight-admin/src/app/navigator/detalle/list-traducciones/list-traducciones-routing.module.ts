import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ListTraduccionesPage } from '@bn8-imports/imports.views'

const routes: Routes = [
  {
    path: '',
    component: ListTraduccionesPage,
    data:{
      header:'Traducciones',
      back:false
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListTraduccionesRoutingModule { }