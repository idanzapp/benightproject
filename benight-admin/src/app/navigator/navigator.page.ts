import { Component, OnInit } from '@angular/core'
import { SharedDataService } from '@bn8-services/shared-data.service'

@Component({
  selector: 'navigator',
  templateUrl: './navigator.page.html',
  styleUrls: ['./navigator.page.scss'],
})
export class NavigatorPage implements OnInit {

  mainTabs = [
    {href:'/navigator/gestion/eventos',icon:'play',title:'Gestion'},
    {href:'/navigator/chat',icon:'list',title:'Chat'},
    {href:'/navigator/notificaciones',icon:'list',title:'Notificaciones'},
    {href:'/navigator/general',icon:'book',title:'General'},
    //{href:'/navigator/detalle',icon:'book',title:'Detalle'}
  ] 

  constructor(public sd: SharedDataService) { }

  ngOnInit() {}  
}
