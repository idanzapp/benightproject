import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MapaPage } from './mapa.page'
import { DetalleHandlerPage } from '@bn8-detalle/detalle-handler.page'

const routes: Routes = [
    {
      path: '',
      component: MapaPage
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
export class MapaRoutingModule { }