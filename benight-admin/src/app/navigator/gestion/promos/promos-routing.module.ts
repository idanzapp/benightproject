import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PromosPage } from '@bn8-imports/imports.views'
import { UserLevelGuard } from '@bn8-services/user-level.guard'

const basehref = '../../detalle/'
const routes: Routes = [
    {
      path: '',
      component: PromosPage,
      data:{
        header:'Promos',
        back:false
      },
      canActivate: [UserLevelGuard]
    },
    {
      path:'editar/:id',
      data:{
        header:'Editar Promo',
        back:true
      },
      loadChildren:  `${basehref}detalle-info-promo/detalle-info-promo.module#DetalleInfoPromoPageModule`
    }, 
    {path:'**',redirectTo:'',pathMatch:'full'} 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromosRoutingModule { }