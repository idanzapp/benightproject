import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DetalleInfoEventPage } from '@bn8-imports/imports.views'

const routes: Routes = [
  {
    path: '',
    component: DetalleInfoEventPage,
    data:{
      header:'Evento',
      back:true
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleInfoEventRoutingModule { }