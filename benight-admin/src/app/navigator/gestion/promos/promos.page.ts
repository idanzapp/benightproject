import { Component } from '@angular/core'
import { DataFeedService } from '@bn8-services/data-feed.service'

@Component({
  selector: 'gestion-promos',
  templateUrl: './promos.page.html',
  styleUrls: ['./promos.page.scss'],
})
export class PromosPage {

  constructor(private feed: DataFeedService) { }

}
