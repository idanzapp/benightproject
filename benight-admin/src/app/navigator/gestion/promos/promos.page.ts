import { Component, OnInit } from '@angular/core'
import { DataFeedService,database } from '@bn8-services/data-feed.service'

@Component({
  selector: 'gestion-promos',
  templateUrl: './promos.page.html',
  styleUrls: ['./promos.page.scss'],
})
export class PromosPage implements OnInit {

  constructor(private feed: DataFeedService) { }

  ngOnInit() {
    this.feed.next(database.VAR_HEADER, 'Promos')    
    this.feed.next(database.VAR_HEADER, false)
  }

}
