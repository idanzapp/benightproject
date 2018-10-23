import { Component } from '@angular/core'
import { DataFeedService } from '@bn8-services/data-feed.service'

@Component({
  selector: 'general-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage {

  constructor(private feed: DataFeedService) { }

}
