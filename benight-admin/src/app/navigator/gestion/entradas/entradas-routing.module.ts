import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { EntradasPage, DetalleInfoEntradaPage } from '@bn8-imports/imports.views'
import { tabs } from '@bn8-constants/constants.tabs'
import { UserLevelGuard } from '@bn8-services/user-level.guard'

const routes: Routes = [
    {
      path: '',
      component: EntradasPage,
      data:{
        header:'Entradas',
        back:false,
        hasTop:true,
        tabs: tabs.gestion
      },
      canActivate: [UserLevelGuard]
    },    
    {
      path:'crear/:id',
      component: DetalleInfoEntradaPage,
      data:{
        header:'Crear Entrada',
        hasTop:false,
        back:true
      }
    },
    {
      path:'editar/:id',
      data:{
        header:'Editar Entrada',
        hasTop:false,
        back:true
      },
      component: DetalleInfoEntradaPage
    }, 
    {path:'**',redirectTo:'',pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntradasRoutingModule { }