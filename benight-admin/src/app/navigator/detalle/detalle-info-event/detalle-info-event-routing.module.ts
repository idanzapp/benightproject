import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DetalleInfoEventPage } from './detalle-info-event.page'

const routes: Routes = [
  {
    path: '',
    component: DetalleInfoEventPage
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleInfoEventRoutingModule { }