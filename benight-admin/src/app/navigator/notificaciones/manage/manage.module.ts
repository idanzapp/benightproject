import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { ManagePage } from '@bn8-imports/imports.views'
import { ManageRoutingModule} from '@bn8-imports/imports.routing'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    ...myBaseModules,
    ReactiveFormsModule,
    ManageRoutingModule
  ],
  declarations: [ManagePage]
})
export class ManagePageModule {}