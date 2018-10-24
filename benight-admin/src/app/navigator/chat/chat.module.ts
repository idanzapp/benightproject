import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { ChatPage } from '@bn8-imports/imports.views'
import { ChatRoutingModule } from '@bn8-imports/imports.routing'

@NgModule({
  imports: [
    ...myBaseModules,
    ChatRoutingModule
  ],
  declarations: [ChatPage]
})
export class ChatPageModule {}
