import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { DefaultLocationPage } from '@bn8-imports/imports.views'
import { DefaultLocationRoutingModule } from '@bn8-imports/imports.routing'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    ...myBaseModules,
    ReactiveFormsModule,
    DefaultLocationRoutingModule
  ],
  declarations: [DefaultLocationPage]
})
export class DefaultLocationPageModule {}
