import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ListClubsPage } from '@bn8-imports/imports.views'

const routes: Routes = [
  {
    path: '',
    component: ListClubsPage,
    data:{
      header:'Clubs',
      back:true
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListClubsRoutingModule { }