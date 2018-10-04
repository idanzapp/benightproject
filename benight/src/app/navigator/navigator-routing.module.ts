import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { NavigatorPage } from './navigator.page'

const routes: Routes = [{
  path:'',
  component: NavigatorPage,
  children: [
    { path: '', redirectTo: 'eventos-handler', pathMatch: 'full' },
    //{ path: 'eventos', loadChildren: './eventos/eventos.module#EventosTabModule' },
    { path: 'eventos-handler', loadChildren: './event-handler/event-handler.module#EventHandlerPageModule' },
    { path: 'entradas', loadChildren: './entradas/entradas.module#EntradasPageModule' },
    { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
    { path: 'notificaciones', loadChildren: './notificaciones/notificaciones.module#NotificacionesPageModule'  },
    //{ path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
    { path: 'perfil', loadChildren: './perfil-handler/perfil-handler.module#PerfilHandlerPageModule' },
    { path: '**', redirectTo: '', pathMatch: 'full' }    
  ]
},
{ path: '**', redirectTo: '', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigatorRoutingModule { }