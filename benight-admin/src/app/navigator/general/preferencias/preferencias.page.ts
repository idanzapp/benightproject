
import { Component, OnInit } from '@angular/core'
import { DataFeedService, database } from '@bn8-services/data-feed.service'

@Component({
  selector: 'general-preferencias',
  templateUrl: './preferencias.page.html',
  styleUrls: ['./preferencias.page.scss'],
})
export class PreferenciasPage implements OnInit {

  constructor(private feed: DataFeedService) { }

  ngOnInit() {
    this.feed.next(database.VAR_HEADER, 'Preferencias')
    this.feed.next(database.VAR_BACK, false)
  }

}
