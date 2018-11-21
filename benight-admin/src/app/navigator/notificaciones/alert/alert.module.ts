import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { AlertPage } from '@bn8-imports/imports.views'
import { AlertRoutingModule} from '@bn8-imports/imports.routing'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    ...myBaseModules,
    ReactiveFormsModule,
    AlertRoutingModule
  ],
  declarations: [AlertPage]
})
export class AlertPageModule {}