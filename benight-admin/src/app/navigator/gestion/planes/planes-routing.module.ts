import { PlanesPage, DetalleInfoPlanPage } from '@bn8-imports/imports.views'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { UserLevelGuard } from '@bn8-services/user-level.guard'

const basehref = '../../detalle/'

const routes: Routes = [
  {
    path: '',
    component: PlanesPage,
    data: {
      header: 'Planes',
      back: false
    },
    canActivate: [UserLevelGuard]
  }, 
  {
    path:'editar/:id',
    data:{
      header:'Plan',
      back:true
    },
    loadChildren:  `${basehref}detalle-info-plan/detalle-info-plan.module#DetalleInfoPlanPageModule`
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanesRoutingModule { }