import { Component, OnInit } from '@angular/core'
import { DataFeedService, database } from '@bn8-services/data-feed.service'

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
  
  database = database

  constructor(public feed: DataFeedService) { }
  
  ngOnInit() {
    this.deactiveBack()
  } 
  
  isBackActive(){
    return this.feed.get(database.VAR_BACK)
  }
  
  header(){
    return this.feed.get(database.VAR_HEADER)  
  }
  
  backUrl(){
    return this.feed.get(database.VAR_BACK_URL)
  }
  
  deactiveBack(){
    return this.feed.next(database.VAR_BACK,false)
  }

}
