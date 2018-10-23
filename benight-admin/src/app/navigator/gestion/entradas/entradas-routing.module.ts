import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { EntradasPage } from './entradas.page'
import { UserLevelGuard } from '@bn8-services/user-level.guard';

const routes: Routes = [
    {
      path: '',
      component: EntradasPage,
      data:{
        header:'Entradas',
        back:false
      },
      canActivate: [UserLevelGuard]
    }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntradasRoutingModule { }