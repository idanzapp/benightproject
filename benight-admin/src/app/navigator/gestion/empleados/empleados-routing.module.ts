import { EmpleadosPage } from '@bn8-imports/imports.views'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { UserLevelGuard } from '@bn8-services/user-level.guard'


const basehref =  '../../detalle/'
const routes: Routes = [
    {
      path: '',
      component: EmpleadosPage,
      data:{
        header:'Empleados',
        back:false
      },
      canActivate: [UserLevelGuard]
    },    
    {
      path:'editar/:id',
      data:{
        header:'Evento',
        back:true
      },
      loadChildren:  `${basehref}detalle-info-empleado/detalle-info-empleado.module#DetalleInfoEmpleadoPageModule`
    }, 
    {path:'**',redirectTo:'',pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }