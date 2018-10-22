import { Component, AfterViewInit} from '@angular/core'
import { DataFeedService, database } from '@bn8-services/data-feed.service'

@Component({
  selector: 'general-bans',
  templateUrl: './bans.page.html',
  styleUrls: ['./bans.page.scss'],
})
export class BansPage  implements AfterViewInit{

  constructor(private feed: DataFeedService) { }

  ngAfterViewInit() {
    this.feed.next(database.VAR_HEADER, 'Bans')
    this.feed.next(database.VAR_BACK, false)
  }

}
