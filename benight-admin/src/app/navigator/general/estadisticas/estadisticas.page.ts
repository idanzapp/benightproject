import { Component, OnInit } from '@angular/core'
import { DataFeedService, database } from '@bn8-services/data-feed.service'

@Component({
  selector: 'general-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
})
export class EstadisticasPage implements OnInit {

  constructor(private feed:DataFeedService) { }

  ngOnInit() {
    this.feed.next(database.VAR_HEADER, 'Estadisticas')
    this.feed.next(database.VAR_BACK, false)
  }

}
