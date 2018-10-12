import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { EstadisticasPage } from './estadisticas.page'
import { UserLevelGuard } from '@bn8-services/user-level.guard';

const routes: Routes = [
    {
      path: '',
      component: EstadisticasPage,
      canActivate: [UserLevelGuard]
    }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstadisticasRoutingModule { }