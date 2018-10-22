import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { GeneralPage } from '@bn8-imports/imports.views'

const routes: Routes = [
    {
      path: '',
      component: GeneralPage,
      children: [          
        { path: '', redirectTo: 'info', pathMatch: 'full' },
        { path: 'estadisticas', loadChildren:'./estadisticas/estadisticas.module#GeneralEstadisticasPageModule'  },
        { path: 'info', loadChildren: './info/info.module#InfoPageModule' },
        { path: 'preferencias', loadChildren: './preferencias/preferencias.module#PreferenciasPageModule' },
        { path: 'bans', loadChildren: './bans/bans.module#BansPageModule' },      
        { path: '**', redirectTo: '', pathMatch: 'full' }  
      ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }

  ]
  


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }