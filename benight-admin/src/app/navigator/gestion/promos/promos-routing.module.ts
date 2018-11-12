import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PromosPage, DetalleInfoPromoPage } from '@bn8-imports/imports.views'
import { UserLevelGuard } from '@bn8-services/user-level.guard'

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
      path:'crear/:id',
      component: DetalleInfoPromoPage,
      data:{
        header:'Crear Promo',
        back:true
      }
    },
    {
      path:'editar/:id',
      data:{
        header:'Editar Promo',
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