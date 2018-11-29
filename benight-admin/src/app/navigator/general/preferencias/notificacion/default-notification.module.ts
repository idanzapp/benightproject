import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { DefaultNotificationPage } from '@bn8-imports/imports.views'
import { DefaultNotificationRoutingModule } from '@bn8-imports/imports.routing'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    ...myBaseModules,
    ReactiveFormsModule,
    DefaultNotificationRoutingModule
  ],
  declarations: [DefaultNotificationPage]
})
export class DefaultNotificationPageModule {}
