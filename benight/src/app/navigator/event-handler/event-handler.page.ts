import { RouterModule } from '@angular/router'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'event-handler',
  templateUrl: './event-handler.page.html',
  styleUrls: ['./event-handler.page.scss'],
})
export class EventHandlerPage implements OnInit {

  eventosTabs = [
    {href:'/navigator/eventos-handler/eventos',title:'Eventos'},
    {href:'/navigator/eventos-handler/planes',title:'Planes'},
    {href:'/navigator/eventos-handler/clubs',title:'Clubs'},
    {href:'/navigator/eventos-handler/mapa',title:'Mapa'}
  ]   
  constructor(public router: RouterModule) { }

  ngOnInit() {
  }

}
