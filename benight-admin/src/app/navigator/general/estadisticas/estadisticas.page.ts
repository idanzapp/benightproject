import { Component} from '@angular/core'
import { DataFeedService } from '@bn8-services/data-feed.service'

@Component({
  selector: 'general-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
})
export class EstadisticasPage {

  constructor(private feed:DataFeedService) { }
}
