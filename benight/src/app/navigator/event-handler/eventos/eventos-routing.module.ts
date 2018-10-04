import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { EventosPage } from './eventos.page'
import { DetalleHandlerPage } from '@bn8-detalle/detalle-handler.page'

const routes: Routes = [
    {
      path: '',
      component: EventosPage
    },
    {
      path: 'detalle',
      component: DetalleHandlerPage
    }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }