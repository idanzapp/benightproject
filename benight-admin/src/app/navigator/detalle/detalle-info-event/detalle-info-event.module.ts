import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { DetalleInfoEventPage } from '@bn8-imports/imports.views'
import { PreviewEventosPage } from '@bn8-imports/imports.previews'
import { DetalleInfoEventRoutingModule } from '@bn8-imports/imports.routing'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    ...myBaseModules,
    ReactiveFormsModule,
    DetalleInfoEventRoutingModule
  ],
  entryComponents: [PreviewEventosPage],
  declarations: [DetalleInfoEventPage, PreviewEventosPage]
})
export class DetalleInfoEventPageModule {}
