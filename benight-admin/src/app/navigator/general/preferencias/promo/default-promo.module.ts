import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { DefaultPromoPage } from '@bn8-imports/imports.views'
import { DefaultPromoRoutingModule } from '@bn8-imports/imports.routing'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    ...myBaseModules,
    ReactiveFormsModule,
    DefaultPromoRoutingModule
  ],
  declarations: [DefaultPromoPage]
})
export class DefaultPromoPageModule {}
