import { ClubsPage } from '@bn8-imports/imports.views'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { UserLevelGuard } from '@bn8-services/user-level.guard'


const basehref =  '../../detalle/'

const routes: Routes = [
    {
      path: '',
      component: ClubsPage,
      data:{
        header:'Clubs',
        back:false
      },
      canActivate: [UserLevelGuard]
    },
    {
      path:'editar/:id',
      data:{
        header:'Localizacion',
        back:true
      },
      loadChildren:  `${basehref}detalle-info-club/detalle-info-club.module#DetalleInfoClubPageModule`
    },   
    {
      path:'picker/:id',
      data:{
        header:'Ficheros',
        back:true
      },
      loadChildren:  `${basehref}file-picker/file-picker.module#FilePickerPageModule`
    },   
    {
      path:'listar/traducciones/:id',
      data:{
        header:'Traducciones',
        back:true
      },
      loadChildren:  `${basehref}list-traducciones/list-traducciones.module#ListTraduccionesPageModule`
    }, 
    {
      path:'listar/tags/:id',
      data:{
        header:'Tags',
        back:true
      },
      loadChildren:  `${basehref}list-tags/list-tags.module#ListTagsPageModule`
    },   
    {
      path:'listar/requisitos/:id',
      data:{
        header:'Requisitos',
        back:true
      },
      loadChildren:  `${basehref}list-requisitos/list-requisitos.module#ListRequisitosPageModule`
    },   
    {
      path:'listar/reglas/:id',
      data:{
        header:'Reglas',
        back:true
      },
      loadChildren:  `${basehref}list-publico/list-publico.module#ListPublicoPageModule`
    },
    {
      path:'listar/propietarios/:id',
      data:{
        header:'Propietarios',
        back:true
      },
      loadChildren:  `${basehref}list-propietarios/list-propietarios.module#ListPropietariosPageModule`
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
      path:'listar/empleados/:id',
      data:{
        header:'Empleados',
        back:true
      },
      loadChildren:  `${basehref}list-empleados/list-empleados.module#ListEmpleadosPageModule`
    }, 
    {path:'**',redirectTo:'',pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubsRoutingModule { }