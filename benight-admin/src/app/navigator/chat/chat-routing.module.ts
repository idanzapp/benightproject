import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ChatPage } from '@bn8-imports/imports.views'
import { UserLevelGuard } from '@bn8-services/user-level.guard'

const routes: Routes = [
  {
    path: '',
    component: ChatPage,
    data:{
      header:'Chat',
      back:false,
      hasTop:false,
    },
    canActivate: [UserLevelGuard]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }