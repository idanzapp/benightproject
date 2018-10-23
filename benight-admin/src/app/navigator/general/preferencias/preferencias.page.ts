import { Component } from '@angular/core'
import { DataFeedService } from '@bn8-services/data-feed.service'

@Component({
  selector: 'general-preferencias',
  templateUrl: './preferencias.page.html',
  styleUrls: ['./preferencias.page.scss'],
})
export class PreferenciasPage {

  constructor(private feed: DataFeedService) { }

}
