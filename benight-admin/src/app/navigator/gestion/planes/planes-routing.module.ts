import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PlanesPage } from '@bn8-imports/imports.views'
import { tabs } from '@bn8-interfaces/interfaces.tabs'
import { UserLevelGuard } from '@bn8-services/user-level.guard'

const routes: Routes = [
    {
      path: '',
      component: PlanesPage,
      data:{
        header:'Planes',
        back:false,
        tabs: tabs.gestion
      },
      canActivate: [UserLevelGuard]
    }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanesRoutingModule { }