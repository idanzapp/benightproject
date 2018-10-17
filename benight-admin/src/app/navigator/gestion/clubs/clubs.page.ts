import { Component, OnInit } from '@angular/core'
import { DataFeedService, database } from '@bn8-services/data-feed.service'

@Component({
  selector: 'gestion-clubs',
  templateUrl: './clubs.page.html',
  styleUrls: ['./clubs.page.scss'],
})
export class ClubsPage implements OnInit {

  constructor(private feed: DataFeedService) { }

  ngOnInit() {
    this.feed.next(database.VAR_HEADER, 'Clubs')
    this.feed.next(database.VAR_BACK, false)
  }

}
