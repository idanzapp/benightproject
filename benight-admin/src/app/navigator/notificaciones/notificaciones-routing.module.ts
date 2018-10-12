import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { NotificacionesPage } from './notificaciones.page'
import { UserLevelGuard } from '@bn8-services/user-level.guard'

const routes: Routes = [
    {
      path: '',
      component: NotificacionesPage,
      canActivate: [UserLevelGuard]
    }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificacionesRoutingModule { }