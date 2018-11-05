import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { InfoPage } from '@bn8-imports/imports.views'
import { InfoRoutingModule } from '@bn8-imports/imports.routing'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    ...myBaseModules,
    ReactiveFormsModule,
    InfoRoutingModule
  ],
  declarations: [InfoPage]
})
export class InfoPageModule {}