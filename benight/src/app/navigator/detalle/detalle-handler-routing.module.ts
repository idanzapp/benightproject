
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DetalleHandlerPage } from './detalle-handler.page'
const routes: Routes = [
  {
    path: 'detalle',
    component: DetalleHandlerPage, //canActivate: [ DevNavAuthGuard1Service ],
    children: [
      {
        path: '', //canActivateChild: [ DevNavAuthGuard1Service ],
        children: [
          { path: '', redirectTo: 'galeria', pathMatch: 'full'  },
          { path: 'qr', loadChildren: './qr/qr.module#QrPageModule' },
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

/*const routes: Routes = [
  {
    path: '',
    component: DetalleHandlerPage, //canActivate: [ DevNavAuthGuard1Service ],
    children: [
     // {
       
        { path: '', redirectTo: 'info', pathMatch: 'full'  },
        { path: 'qr', component: QrPage  },
        { path: 'listado', component: ListadoPage  },
        { path: 'info', component: InfoPage  },
        { path: 'galeria', component: GaleriaPage },
        { path: '**',  redirectTo: 'info', pathMatch: 'full' }       
       //path: '', //canActivateChild: [ DevNavAuthGuard1Service ],
        /*children: [
          { path: '', redirectTo: 'info', pathMatch: 'full'  },
          { path: 'qr', component: QrPage  },
          { path: 'listado', component: ListadoPage  },
          { path: 'info', component: InfoPage  },
          { path: 'galeria', component: GaleriaPage },
          { path: '**',  redirectTo: 'info', pathMatch: 'full' }

        ]
     // }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },

]*/


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleHandlerRoutingModule { }