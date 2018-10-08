import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ListClubsPage } from './list-clubs.page'

const routes: Routes = [
  {
    path: '',
    component: ListClubsPage
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListClubsRoutingModule { }