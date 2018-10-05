import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-core/imports'
import { ChatPage } from './chat.page'
import { ChatRoutingModule } from './chat-routing.module'
import { CoreModule } from '@bn8-core/core.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    ChatRoutingModule
  ],
  declarations: [ChatPage]
})
export class ChatPageModule {}
