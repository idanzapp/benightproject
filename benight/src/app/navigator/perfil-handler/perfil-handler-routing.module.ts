import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PerfilHandlerPage } from './perfil-handler.page'

const routes: Routes = [
  {
    path: '',
    component: PerfilHandlerPage,
    children: [
      {
        path: '',
        children: [
          { path: '', redirectTo:'perfil', pathMatch: 'full' },          
          { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
          { path: 'ads', loadChildren: './ads/ads.module#AdsPageModule' },
          { path: 'qr', loadChildren: './qr/qr.module#PerfilQrPageModule' },
          { path: 'preferencias', loadChildren: './preferencias/preferencias.module#PreferenciasPageModule' },
          { path: '**', redirectTo: '', pathMatch: 'full' }
        ]
      }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilHandlerRoutingModule { }