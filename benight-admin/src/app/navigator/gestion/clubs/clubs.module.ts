import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { ClubsPage } from './clubs.page'
import { ClubsRoutingModule } from './clubs-routing.module'

@NgModule({
  imports: [
    ...myBaseModules,
    ClubsRoutingModule
  ],
  declarations: [ClubsPage]
})
export class ClubsPageModule {}