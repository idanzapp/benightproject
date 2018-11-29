import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { DefaultPlanPage } from '@bn8-imports/imports.views'
import { DefaultPlanRoutingModule } from '@bn8-imports/imports.routing'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    ...myBaseModules,
    ReactiveFormsModule,
    DefaultPlanRoutingModule
  ],
  declarations: [DefaultPlanPage]
})
export class DefaultPlanPageModule {}
