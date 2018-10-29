import { EventosPage, DetalleInfoEventPage} from '@bn8-imports/imports.views'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { tabs } from '@bn8-constants/constants.tabs'
import { UserLevelGuard } from '@bn8-services/user-level.guard'

const routes: Routes = [
    {
      path: '',
      component: EventosPage,
      data:{
        header:'Eventos',
        back:false,
        hasTop:true,
        tabs: tabs.gestion        
      },
      canActivate: [UserLevelGuard]
    },    
    {
      path:'crear/:id',
      component: DetalleInfoEventPage,
      data:{
        header:'Crear Evento',
        hasTop:false,
        back:true
      }
    },
    {
      path:'editar/:id',
      data:{
        header:'Editar Evento',
        hasTop:false,
        back:true
      },
      component: DetalleInfoEventPage
    }, 
    {path:'**',redirectTo:'',pathMatch:'full'}

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }