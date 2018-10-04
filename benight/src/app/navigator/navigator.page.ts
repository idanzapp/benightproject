import { Component, OnInit } from '@angular/core'
import { SharedDataService } from '@bn8-services/shared-data.service'

@Component({
  selector: 'navigator',
  templateUrl: './navigator.page.html',
  styleUrls: ['./navigator.page.scss'],
})
export class NavigatorPage implements OnInit {

  mainTabs = [
    {href:'/navigator/eventos-handler',icon:'play',title:'Eventos'},
    {href:'/navigator/entradas',icon:'list',title:'Entradas'},
    {href:'/navigator/chat',icon:'list',title:'Chat'},
    {href:'/navigator/notificaciones',icon:'book',title:'Notificaciones'},
    {href:'/navigator/perfil',icon:'people',title:'Perfil'}
  ]  
  constructor(public sd: SharedDataService) { }

  ngOnInit() {
  }

}
