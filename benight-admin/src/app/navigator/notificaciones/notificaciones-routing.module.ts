import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { NotificacionesPage } from '@bn8-imports/imports.views'
import { UserLevelGuard } from '@bn8-services/user-level.guard'

const routes: Routes = [
    {
      path: '',
      component: NotificacionesPage,
      data:{
        header:'Notificaciones',
        back:false
      },
      canActivate: [UserLevelGuard]
    }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificacionesRoutingModule { }