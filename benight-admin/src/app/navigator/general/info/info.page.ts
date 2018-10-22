import { Component, AfterViewInit } from '@angular/core'
import { DataFeedService, database } from '@bn8-services/data-feed.service'

@Component({
  selector: 'general-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements AfterViewInit {

  constructor(private feed: DataFeedService) { }

  ngAfterViewInit() {
    this.feed.next(database.VAR_HEADER, 'Info')
    this.feed.next(database.VAR_BACK, false)
  }

}
