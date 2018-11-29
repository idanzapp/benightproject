import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { DefaultChatPage } from '@bn8-imports/imports.views'
import { DefaultChatRoutingModule } from '@bn8-imports/imports.routing'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    ...myBaseModules,
    ReactiveFormsModule,
    DefaultChatRoutingModule
  ],
  declarations: [DefaultChatPage]
})
export class DefaultChatPageModule {}
