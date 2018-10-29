import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PromosPage, DetalleInfoPromoPage } from '@bn8-imports/imports.views'
import { tabs } from '@bn8-constants/constants.tabs'
import { UserLevelGuard } from '@bn8-services/user-level.guard'

const routes: Routes = [
    {
      path: '',
      component: PromosPage,
      data:{
        header:'Promos',
        back:false,
        hasTop:true,
        tabs: tabs.gestion
      },
      canActivate: [UserLevelGuard]
    },   
    {
      path:'crear/:id',
      component: DetalleInfoPromoPage,
      data:{
        header:'Crear Promo',
        hasTop:false,
        back:true
      }
    },
    {
      path:'editar/:id',
      data:{
        header:'Editar Promo',
        hasTop:false,
        back:true
      },
      component: DetalleInfoPromoPage
    }, 
    {path:'**',redirectTo:'',pathMatch:'full'} 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromosRoutingModule { }