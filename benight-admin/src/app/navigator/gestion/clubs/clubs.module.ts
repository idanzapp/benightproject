import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { ClubsPage } from '@bn8-imports/imports.views'
import { ClubsRoutingModule } from '@bn8-imports/imports.routing'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    ...myBaseModules,
    ReactiveFormsModule,
    ClubsRoutingModule
  ],
  declarations: [ClubsPage]
})
export class ClubsPageModule {}