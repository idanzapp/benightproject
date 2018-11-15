import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { DetalleInfoClubPage } from '@bn8-imports/imports.views'
import { PreviewClubPage } from '@bn8-imports/imports.previews'
import { DetalleInfoClubRoutingModule } from '@bn8-imports/imports.routing'

import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    ...myBaseModules,
    ReactiveFormsModule,
    DetalleInfoClubRoutingModule
  ],
  entryComponents:[PreviewClubPage],
  declarations: [DetalleInfoClubPage, PreviewClubPage]
})
export class DetalleInfoClubPageModule {}
