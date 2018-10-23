import { Component,AfterViewInit } from '@angular/core'
import { DataFeedService } from '@bn8-services/data-feed.service'
import { database } from '@bn8-interfaces/interfaces.database'
@Component({
  selector: 'chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements AfterViewInit {

  constructor(public sd: DataFeedService) { 
  }

  ngAfterViewInit() {
    this.sd.next(database.VAR_HEADER, 'Chat')
    this.sd.next(database.VAR_BACK, false)   
  }
}
