import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ChatPage } from '@bn8-imports/imports.views'
import { tabs } from '@bn8-constants/constants.tabs'
import { UserLevelGuard } from '@bn8-services/user-level.guard'

const routes: Routes = [
  {
    path: '',
    component: ChatPage,
    data:{
      header:'Chat',
      back:false,
      tabs: tabs.main
    },
    canActivate: [UserLevelGuard]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }