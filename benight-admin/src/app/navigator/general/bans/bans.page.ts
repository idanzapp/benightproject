import { Component} from '@angular/core'
import { DataFeedService } from '@bn8-services/data-feed.service'

@Component({
  selector: 'general-bans',
  templateUrl: './bans.page.html',
  styleUrls: ['./bans.page.scss'],
})
export class BansPage{

  constructor(private feed: DataFeedService) { }

}
