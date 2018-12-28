import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { NavigatorPage } from '@bn8-imports/imports.views'

const routes: Routes = [{
  path:'',
  component: NavigatorPage,
  children: [
    { path: '', redirectTo: 'test', pathMatch: 'full' },
    { path: 'test', loadChildren: './test/test.module#TestPageModule' },
    { path: 'gestion', loadChildren: './gestion/gestion.module#GestionPageModule' },
    { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },    
    { path: 'notificaciones', loadChildren: './notificaciones/notificaciones.module#NotificacionesPageModule' }, 
    { path: 'general', loadChildren: './general/general.module#GeneralPageModule' },   
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