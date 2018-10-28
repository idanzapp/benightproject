import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PreferenciasPage } from '@bn8-imports/imports.views'
import { tabs } from '@bn8-constants/constants.tabs'
import { UserLevelGuard } from '@bn8-services/user-level.guard'

const routes: Routes = [
    {
      path: '',
      component: PreferenciasPage,
      data:{
        header:'Preferencias',
        back:false,
        tabs: tabs.general
      },
      canActivate: [UserLevelGuard]
    }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreferenciasRoutingModule { }