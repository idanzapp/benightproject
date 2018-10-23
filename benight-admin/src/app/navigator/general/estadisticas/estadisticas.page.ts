import { Component, AfterViewInit } from '@angular/core'
import { DataFeedService } from '@bn8-services/data-feed.service'
import { database } from '@bn8-interfaces/interfaces.database'

@Component({
  selector: 'general-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
})
export class EstadisticasPage implements AfterViewInit{

  constructor(private feed:DataFeedService) { }

  ngAfterViewInit() {
    this.feed.next(database.VAR_HEADER, 'Estadisticas')
    this.feed.next(database.VAR_BACK, false)
  }

}
