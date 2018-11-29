import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DefaultLocationPage } from '@bn8-imports/imports.views'
import { UserLevelGuard } from '@bn8-services/user-level.guard'

const routes: Routes = [
  {
    path: '',
    component: DefaultLocationPage,
    data:{
      header:'Localizacion',
      back:true
    },
    canActivate: [UserLevelGuard]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultLocationRoutingModule { }