import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { NotificacionesPage } from '@bn8-imports/imports.views'


const routes: Routes = [
    {
      path: '',
      component: NotificacionesPage,
      children: [          
        { path: '', redirectTo: 'notificaciones', pathMatch: 'full' }, 
        { path: 'notificaciones', loadChildren: './alert/alert.module#AlertPageModule' },
        { path: 'gestion', loadChildren: './manage/manage.module#ManagePageModule' },         
        { path: '**', redirectTo: '', pathMatch: 'full' }
      ] 
    }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificacionesRoutingModule { }