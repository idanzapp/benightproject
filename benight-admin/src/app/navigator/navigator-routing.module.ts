import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { NavigatorPage } from './navigator.page'

const routes: Routes = [{
  path:'',
  component: NavigatorPage,
  children: [
    { path: '', redirectTo: 'gestion', pathMatch: 'full' },
    { path: 'gestion', loadChildren: './gestion/gestion.module#GestionPageModule' },
    { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },    
    { path: 'notificaciones', loadChildren: './notificaciones/notificaciones.module#NotificacionesPageModule' }, 
    { path: 'general', loadChildren: './general/general.module#GeneralPageModule' },
    { path: 'detalle', loadChildren: './detalle/detalle.module#DetallePageModule' },    
    { path: '**', redirectTo: '', pathMatch: 'full' }    
  ]
},
{ path: '**', redirectTo: '', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigatorRoutingModule { }