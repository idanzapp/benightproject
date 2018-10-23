import { Component } from '@angular/core'
import { DataFeedService } from '@bn8-services/data-feed.service'
@Component({
  selector: 'chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage {

  constructor(public sd: DataFeedService) { 
  }
}
