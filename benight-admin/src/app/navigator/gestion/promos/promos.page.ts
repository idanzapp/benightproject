import { Component, AfterViewInit } from '@angular/core'
import { DataFeedService,database } from '@bn8-services/data-feed.service'

@Component({
  selector: 'gestion-promos',
  templateUrl: './promos.page.html',
  styleUrls: ['./promos.page.scss'],
})
export class PromosPage implements AfterViewInit {

  constructor(private feed: DataFeedService) { }

  ngAfterViewInit() {
    this.feed.next(database.VAR_HEADER, 'Promos')    
    this.feed.next(database.VAR_BACK, false)
  }

}
