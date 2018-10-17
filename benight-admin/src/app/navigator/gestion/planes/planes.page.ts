import { Component, OnInit } from '@angular/core'
import { DataFeedService, database } from '@bn8-services/data-feed.service'

@Component({
  selector: 'gestion-planes',
  templateUrl: './planes.page.html',
  styleUrls: ['./planes.page.scss'],
})
export class PlanesPage implements OnInit {

  constructor(private feed: DataFeedService) { }

  ngOnInit() {
    this.feed.next(database.VAR_HEADER, 'Planes')
    this.feed.next(database.VAR_BACK, false)
  }

}
