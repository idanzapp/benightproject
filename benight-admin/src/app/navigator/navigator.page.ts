import { Component, OnInit } from '@angular/core'
import { DataFeedService } from '@bn8-services/data-feed.service'
import { database } from '@bn8-interfaces/interfaces.database'
import { Router, ActivationStart } from '@angular/router'
import { filter} from 'rxjs/operators'

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
  title:string = "Eventos"
  back:boolean = false

  constructor(public feed: DataFeedService, private router: Router) { }
  
  ngOnInit() {
    //Handle Title
    this.router.events.pipe( 
      filter(event => event instanceof ActivationStart) )
      .subscribe(event => { 
        this.back = event['snapshot'].data['back']
        this.title = event['snapshot'].data['header']
      })
  }
  
  isBackActive(){
    return this.back
  }
  
  header(){
    return this.title  
  }
  
  backUrl(){
    return this.feed.get(database.VAR_BACK_URL)
  }
  
  /*deactiveBack(){
    return this.feed.next(database.VAR_BACK,false)
  }*/

}
