import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DetalleInfoPage } from './detalle-info.page'

const routes: Routes = [
  {
    path: '',
    component: DetalleInfoPage
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleInfoRoutingModule { }