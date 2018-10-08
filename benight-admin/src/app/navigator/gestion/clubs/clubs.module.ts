import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-core/imports'
import { ClubsPage } from './clubs.page'
import { ClubsRoutingModule } from './clubs-routing.module'
import { CoreModule } from '@bn8-core/core.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    ClubsRoutingModule
  ],
  declarations: [ClubsPage]
})
export class ClubsPageModule {}