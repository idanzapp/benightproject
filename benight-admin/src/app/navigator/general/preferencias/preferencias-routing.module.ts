import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PreferenciasPage } from './preferencias.page'
import { UserLevelGuard } from '@bn8-services/user-level.guard'

const routes: Routes = [
    {
      path: '',
      component: PreferenciasPage,
      canActivate: [UserLevelGuard]
    }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreferenciasRoutingModule { }