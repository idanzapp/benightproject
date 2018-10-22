import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { ListClubsPage } from './list-clubs.page'
import { ListClubsRoutingModule } from './list-clubs-routing.module'

@NgModule({
  imports: [
    ...myBaseModules,
    ListClubsRoutingModule
  ],
  declarations: [ListClubsPage]
})
export class ListClubsPageModule {}
