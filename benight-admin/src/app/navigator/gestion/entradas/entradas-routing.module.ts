import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { EntradasPage } from '@bn8-imports/imports.views'
import { UserLevelGuard } from '@bn8-services/user-level.guard'


const basehref =  '../../detalle/'

const routes: Routes = [
    {
      path: '',
      component: EntradasPage,
      data:{
        header:'Entradas',
        back:false
      },
      canActivate: [UserLevelGuard]
    },
    {
      path:'editar/:id',
      data:{
        header:'Editar Entrada',
        back:true
      },
      loadChildren:  `${basehref}detalle-info-entrada/detalle-info-entrada.module#DetalleInfoEntradaPageModule`
    }, 
    {path:'**',redirectTo:'',pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntradasRoutingModule { }