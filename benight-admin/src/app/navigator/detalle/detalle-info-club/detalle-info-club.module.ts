import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { DetalleInfoClubPage } from '@bn8-imports/imports.views'
import { DetalleInfoClubRoutingModule } from '@bn8-imports/imports.routing'

import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    ...myBaseModules,
    ReactiveFormsModule,
    DetalleInfoClubRoutingModule
  ],
  declarations: [DetalleInfoClubPage]
})
export class DetalleInfoClubPageModule {}
