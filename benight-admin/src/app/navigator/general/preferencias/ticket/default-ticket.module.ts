import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { DefaultTicketPage } from '@bn8-imports/imports.views'
import { DefaultTicketRoutingModule } from '@bn8-imports/imports.routing'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    ...myBaseModules,
    ReactiveFormsModule,
    DefaultTicketRoutingModule
  ],
  declarations: [DefaultTicketPage]
})
export class DefaultTicketPageModule {}
