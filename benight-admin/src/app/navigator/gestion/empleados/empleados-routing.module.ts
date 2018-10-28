import { EmpleadosPage, DetalleInfoEmpleadoPage} from '@bn8-imports/imports.views'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { tabs } from '@bn8-constants/constants.tabs'
import { UserLevelGuard } from '@bn8-services/user-level.guard'

const routes: Routes = [
    {
      path: '',
      component: EmpleadosPage,
      data:{
        header:'Empleados',
        back:false,
        tabs: tabs.gestion
      },
      canActivate: [UserLevelGuard]
    },    
    {
      path:'crear/:id',
      component: DetalleInfoEmpleadoPage,
      data:{
        header:'Crear Empleado',
        back:true
      }
    },
    {
      path:'editar/:id',
      data:{
        header:'Editar Empleado',
        back:true
      },
      component: DetalleInfoEmpleadoPage
    }, 
    {path:'**',redirectTo:'',pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }