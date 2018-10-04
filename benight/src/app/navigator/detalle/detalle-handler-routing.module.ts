
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DetalleHandlerPage } from './detalle-handler.page'
const routes: Routes = [
  {
    path: 'detalle',
    component: DetalleHandlerPage,
    children: [
      {
        path: '',
        children: [
          { path: '', redirectTo: 'galeria', pathMatch: 'full'  },
          { path: 'qr', loadChildren: './qr/de-qr.module#QrPageModule' },
          { path: 'listado', loadChildren: './listado/listado.page.module#ListadoPageModule' },
          { path: 'info', loadChildren: './info/info.page.module#InfoPageModule' },
          { path: 'galeria',  loadChildren: './galeria/galeria.page.module#GaleriaPageModule' },
          { path: '**',  redirectTo: '', pathMatch: 'full' }
        ]
      }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleHandlerRoutingModule { }