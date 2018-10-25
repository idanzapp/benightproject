import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { EventosPage, DetalleInfoEventPage } from '@bn8-imports/imports.views'
import { PreviewEventosPage } from '@bn8-imports/imports.previews'
import { EventosRoutingModule} from '@bn8-imports/imports.routing'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    ...myBaseModules,
    ReactiveFormsModule,
    EventosRoutingModule
  ],
  entryComponents: [PreviewEventosPage],
  declarations: [EventosPage,DetalleInfoEventPage,PreviewEventosPage]
})
export class EventosPageModule {}