import { EmpleadosPage, DetalleInfoEmpleadoPage} from '@bn8-imports/imports.views'
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
    {
      path:'listar/estadisticas/:id',
      data:{
        header:'Estadisticas',
        back:true
      },
      loadChildren:  `${basehref}list-estadisticas/list-estadisticas.module#ListEstadisticasPageModule`
    },   
    {
      path:'listar/entradas/:id',
      data:{
        header:'Entradas',
        back:true
      },
      loadChildren:  `${basehref}list-entradas/list-entradas.module#ListEntradasPageModule`
    },   
    {
      path:'listar/localizaciones/:id',
      data:{
        header:'Clubs',
        back:true
      },
      loadChildren:  `${basehref}list-clubs/list-clubs.module#ListClubsPageModule`
    }, 
    {path:'**',redirectTo:'',pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }