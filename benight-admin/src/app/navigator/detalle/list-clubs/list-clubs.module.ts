import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { ListClubsPage } from '@bn8-imports/imports.views'
import { ListClubsRoutingModule } from '@bn8-imports/imports.routing'

@NgModule({
  imports: [
    ...myBaseModules,
    ListClubsRoutingModule
  ],
  declarations: [ListClubsPage]
})
export class ListClubsPageModule {}
