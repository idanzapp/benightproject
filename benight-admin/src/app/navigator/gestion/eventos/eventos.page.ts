import { Component, OnInit } from '@angular/core'
import { SharedDataService } from '@bn8-services/shared-data.service'

@Component({
  selector: 'gestion-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {
  
  constructor(private sd: SharedDataService) {
  }

  ngOnInit() {
    this.sd.set('header', 'Eventos')
  }
}