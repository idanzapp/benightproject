import { Component, OnInit } from '@angular/core'
import { SharedDataService } from '@bn8-services/shared-data.service'

@Component({
  selector: 'general-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
})
export class EstadisticasPage implements OnInit {

  constructor(private sd:SharedDataService) { }

  ngOnInit() {
    this.sd.set('header', 'Estadisticas')
  }

}
