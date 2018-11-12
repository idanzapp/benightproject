import { PlanesPage, DetalleInfoPlanPage } from '@bn8-imports/imports.views'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { UserLevelGuard } from '@bn8-services/user-level.guard'

const routes: Routes = [
    {
      path: '',
      component: PlanesPage,
      data:{
        header:'Planes',
        back:false
      },
      canActivate: [UserLevelGuard]
    }  , 
    {
      path:'crear/:id',
      component: DetalleInfoPlanPage,
      data:{
        header:'Crear Plan',
        back:true
      }
    },
    {
      path:'editar/:id',
      data:{
        header:'Editar Plan',
        back:true
      },
      component: DetalleInfoPlanPage
    }, 
    {path:'**',redirectTo:'',pathMatch:'full'} 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanesRoutingModule { }