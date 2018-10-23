import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { InfoPage } from '@bn8-imports/imports.views'
import { tabs } from '@bn8-interfaces/interfaces.tabs'
import { UserLevelGuard } from '@bn8-services/user-level.guard'

const routes: Routes = [
    {
      path: '',
      component: InfoPage,
      data:{
        header:'Info',
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
export class InfoRoutingModule { }