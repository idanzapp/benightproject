import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { EventosPage } from '@bn8-imports/imports.views'
import { EventosRoutingModule} from '@bn8-imports/imports.routing'
import { ReactiveFormsModule } from '@angular/forms'
import { CountdownComponentModule } from '@bn8-core/countdown/countdown.component.module'


@NgModule({
  imports: [
    ...myBaseModules,
    ReactiveFormsModule,
    EventosRoutingModule,
    CountdownComponentModule
  ],
  declarations: [EventosPage]
})
export class EventosPageModule {}