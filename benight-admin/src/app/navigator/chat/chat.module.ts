import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { ChatPage } from './chat.page'
import { ChatRoutingModule } from './chat-routing.module'

@NgModule({
  imports: [
    ...myBaseModules,
    ChatRoutingModule
  ],
  declarations: [ChatPage]
})
export class ChatPageModule {}
