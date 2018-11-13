import { EventosPage, DetalleInfoEventPage} from '@bn8-imports/imports.views'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { UserLevelGuard } from '@bn8-services/user-level.guard'

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
      loadChildren:  '../../detalle/detalle-info-event/detalle-info-event.module#DetalleInfoEventPageModule'
    },   
    {
      path:'picker/:id',
      data:{
        header:'Ficheros',
        back:true
      },
      loadChildren:  '../../detalle/file-picker/file-picker.module#FilePickerPageModule'
    },   
    {
      path:'listar/traducciones/:id',
      data:{
        header:'Traducciones',
        back:true
      },
      loadChildren:  '../../detalle/list-traducciones/list-traducciones.module#ListTraduccionesPageModule'
    }, 
    {
      path:'listar/tags/:id',
      data:{
        header:'Tags',
        back:true
      },
      loadChildren:  '../../detalle/list-tags/list-tags.module#ListTagsPageModule'
    },   
    {
      path:'listar/requisitos/:id',
      data:{
        header:'Requisitos',
        back:true
      },
      loadChildren:  '../../detalle/list-requisitos/list-requisitos.module#ListRequisitosPageModule'
    },   
    {
      path:'listar/reglas/:id',
      data:{
        header:'Reglas',
        back:true
      },
      loadChildren:  '../../detalle/list-public/list-public.module#ListPublicPageModule'
    },
    {
      path:'listar/propietarios/:id',
      data:{
        header:'Propietarios',
        back:true
      },
      loadChildren:  '../../detalle/list-propietarios/list-propietarios.module#ListPropietariosPageModule'
    },   
    {
      path:'listar/listas/:id',
      data:{
        header:'Listas',
        back:true
      },
      loadChildren:  '../../detalle/list-listas/list-listas.module#ListListasPageModule'
    },        
    {
      path:'listar/fechas/:id',
      data:{
        header:'Fechas',
        back:true
      },
      loadChildren:  '../../detalle/list-fechas/list-fechas.module#ListFechasPageModule'
    },   
    {
      path:'listar/estadisticas/:id',
      data:{
        header:'Estadisticas',
        back:true
      },
      loadChildren:  '../../detalle/list-estadisticas/list-estadisticas.module#ListEstadisticasPageModule'
    },   
    {
      path:'listar/tickets/:id',
      data:{
        header:'Tickets',
        back:true
      },
      loadChildren:  '../../detalle/list-entradas/list-entradas.module#ListEntradasPageModule'
    },   
    {
      path:'listar/empleados/:id',
      data:{
        header:'Empleados',
        back:true
      },
      loadChildren:  '../../detalle/list-empleados/list-empleados.module#ListEmpleadosPageModule'
    }, 
    {
      path:'listar/locations/:id',
      data:{
        header:'Localizaciones',
        back:true
      },
      loadChildren:  '../../detalle/list-clubs/list-clubs.module#ListClubsPageModule'
    }, 
    {path:'**',redirectTo:'',pathMatch:'full'}

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }