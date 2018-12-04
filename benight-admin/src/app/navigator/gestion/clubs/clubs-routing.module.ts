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
    {path:'**',redirectTo:'',pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubsRoutingModule { }