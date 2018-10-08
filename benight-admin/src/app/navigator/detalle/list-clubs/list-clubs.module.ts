import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-core/imports'
import { ListClubsPage } from './list-clubs.page'
import { ListClubsRoutingModule } from './list-clubs-routing.module'
import { CoreModule } from '@bn8-core/core.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    ListClubsRoutingModule
  ],
  declarations: [ListClubsPage]
})
export class ListClubsPageModule {}
