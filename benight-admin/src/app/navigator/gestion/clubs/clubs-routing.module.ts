import { ClubsPage, DetalleInfoClubPage} from '@bn8-imports/imports.views'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { tabs } from '@bn8-constants/constants.tabs'
import { UserLevelGuard } from '@bn8-services/user-level.guard'

const routes: Routes = [
    {
      path: '',
      component: ClubsPage,
      data:{
        header:'Clubs',
        back:false,
        hasTop:true,
        tabs: tabs.gestion
      },
      canActivate: [UserLevelGuard]
    },    
    {
      path:'crear/:id',
      component: DetalleInfoClubPage,
      data:{
        header:'Crear Club',
        hasTop:false,
        back:true
      }
    },
    {
      path:'editar/:id',
      data:{
        header:'Editar Club',
        hasTop:false,
        back:true
      },
      component: DetalleInfoClubPage
    }, 
    {path:'**',redirectTo:'',pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubsRoutingModule { }