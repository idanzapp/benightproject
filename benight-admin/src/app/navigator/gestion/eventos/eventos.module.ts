import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { EventosPage } from '@bn8-imports/imports.views'
import { EventosRoutingModule} from '@bn8-imports/imports.routing'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    ...myBaseModules,
    ReactiveFormsModule,
    EventosRoutingModule
  ],
  declarations: [EventosPage]
})
export class EventosPageModule {}