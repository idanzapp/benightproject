import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { NavigatorPage } from './navigator.page'

const routes: Routes = [{
  path:'',
  component: NavigatorPage,
  children: [
    { path: '', redirectTo: 'eventos', pathMatch: 'full' },
    { path: 'eventos', loadChildren: './eventos/eventos.module#EventosPageModule' },
    { path: 'entradas', loadChildren: './entradas/entradas.module#EntradasPageModule' },
    { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
    { path: 'notificaciones', loadChildren: './notificaciones/notificaciones.module#NotificacionesPageModule' },
    { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
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