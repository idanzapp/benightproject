import { ManagePage} from '@bn8-imports/imports.views'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { UserLevelGuard } from '@bn8-services/user-level.guard'

const routes: Routes = [
    {
      path: '',
      component: ManagePage,
      data:{
        header:'Gestion',
        back:false       
      },
      canActivate: [UserLevelGuard]
    },
    {path:'**',redirectTo:'',pathMatch:'full'}

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }