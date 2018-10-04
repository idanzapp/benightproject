
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { SharedDataService } from '@bn8-services/shared-data.service'

@Component({
  selector: 'eventos-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  constructor(private router: Router, private sd: SharedDataService) { }

  ngOnInit() {}

  detail() {
    this.sd.set('tabs',{info:true,galeria:true,listado:false,qr:false})
    this.sd.set('header','Eventos')
    this.router.navigate(['/navigator/eventos-handler/eventos/detalle/info'])
  }

}
