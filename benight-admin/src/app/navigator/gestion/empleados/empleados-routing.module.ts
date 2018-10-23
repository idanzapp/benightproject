import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { EmpleadosPage } from './empleados.page'
import { UserLevelGuard } from '@bn8-services/user-level.guard';

const routes: Routes = [
    {
      path: '',
      component: EmpleadosPage,
      data:{
        header:'Empleados',
        back:false
      },
      canActivate: [UserLevelGuard]
    }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }