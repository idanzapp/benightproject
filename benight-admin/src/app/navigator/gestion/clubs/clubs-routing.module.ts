import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ClubsPage } from './clubs.page'
import { UserLevelGuard } from '@bn8-services/user-level.guard';

const routes: Routes = [
    {
      path: '',
      component: ClubsPage,
      canActivate: [UserLevelGuard]
    }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubsRoutingModule { }