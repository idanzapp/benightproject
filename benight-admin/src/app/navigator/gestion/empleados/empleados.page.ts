import { Component, OnInit } from '@angular/core'
import { DataFeedService, database } from '@bn8-services/data-feed.service'

@Component({
  selector: 'gestion-empleados',
  templateUrl: './empleados.page.html',
  styleUrls: ['./empleados.page.scss'],
})
export class EmpleadosPage implements OnInit {

  constructor(private feed: DataFeedService) { }

  ngOnInit() {
    this.feed.next(database.VAR_HEADER, 'Empleados')
    this.feed.next(database.VAR_BACK, false)
  }

}
