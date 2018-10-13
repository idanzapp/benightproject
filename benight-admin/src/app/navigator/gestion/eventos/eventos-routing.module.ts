import { DetalleInfoEventPage } from './../../detalle/detalle-info-event/detalle-info-event.page'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { EventosPage } from './eventos.page'
import { UserLevelGuard } from '@bn8-services/user-level.guard'

const routes: Routes = [
    {
      path: '',
      component: EventosPage,
      canActivate: [UserLevelGuard]
    },    
    {
      path:'crear',
      component: DetalleInfoEventPage
    },
    {
      path:'editar',
      component: DetalleInfoEventPage
    }, 
    {path:'**',redirectTo:'',pathMatch:'full'},

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }