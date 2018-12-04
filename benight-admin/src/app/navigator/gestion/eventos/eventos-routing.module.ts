import { EventosPage} from '@bn8-imports/imports.views'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { UserLevelGuard } from '@bn8-services/user-level.guard'

const basehref =  '../../detalle/'

const routes: Routes = [
    {
      path: '',
      component: EventosPage,
      data:{
        header:'Eventos',
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
      loadChildren:  `${basehref}detalle-info-event/detalle-info-event.module#DetalleInfoEventPageModule`
    },
    {path:'**',redirectTo:'',pathMatch:'full'}

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }