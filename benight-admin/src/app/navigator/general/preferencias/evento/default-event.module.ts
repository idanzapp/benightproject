import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { DefaultEventPage } from '@bn8-imports/imports.views'
import { DefaultEventRoutingModule } from '@bn8-imports/imports.routing'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    ...myBaseModules,
    ReactiveFormsModule,
    DefaultEventRoutingModule
  ],
  declarations: [DefaultEventPage]
})
export class DefaultEventPageModule {}
