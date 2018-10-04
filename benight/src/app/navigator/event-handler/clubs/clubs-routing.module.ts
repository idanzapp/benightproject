import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ClubsPage } from './clubs.page'
import { DetalleHandlerPage } from '@bn8-detalle/detalle-handler.page'

const routes: Routes = [
    {
      path: '',
      component: ClubsPage
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
export class ClubsRoutingModule { }