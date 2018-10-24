import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { EventosPage,DetalleInfoEventPage } from '@bn8-imports/imports.views'
import { EventosRoutingModule} from '@bn8-imports/imports.routing'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    ...myBaseModules,
    ReactiveFormsModule,
    EventosRoutingModule
  ],
  declarations: [EventosPage,DetalleInfoEventPage]
})
export class EventosPageModule {}