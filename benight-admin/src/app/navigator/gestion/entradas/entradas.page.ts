import { Component } from '@angular/core'
import { DataFeedService } from '@bn8-services/data-feed.service'

@Component({
  selector: 'gestion-entradas',
  templateUrl: './entradas.page.html',
  styleUrls: ['./entradas.page.scss'],
})
export class EntradasPage {

  constructor(private feed: DataFeedService) { }
}
