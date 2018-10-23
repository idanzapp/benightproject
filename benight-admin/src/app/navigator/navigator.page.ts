import { Component, OnInit } from '@angular/core'
import { DataFeedService } from '@bn8-services/data-feed.service'
import { database } from '@bn8-interfaces/interfaces.database'
import { tabs } from '@bn8-interfaces/interfaces.tabs'
import { Router, ActivationStart } from '@angular/router'
import { filter} from 'rxjs/operators'

@Component({
  selector: 'navigator',
  templateUrl: './navigator.page.html',
  styleUrls: ['./navigator.page.scss'],
})
export class NavigatorPage implements OnInit {

  mainTabs = tabs.mainTabs
  gestionTabs = tabs.gestionTabs
  generalTabs = tabs.generalTabs
  
  database = database
  title:string = "Eventos"
  back:boolean = false

  empty:boolean = true
  tabs: number = tabs.gestion

  general = tabs.general
  gestion = tabs.gestion

  constructor(public feed: DataFeedService, private router: Router) { }
  
  ngOnInit() {
    //Handle Title
    this.router.events.pipe( 
      filter(event => event instanceof ActivationStart) )
      .subscribe(event => { 
        console.log(event['snapshot'].data['tabs'])
        this.back = event['snapshot'].data['back']
        this.title = event['snapshot'].data['header']
        this.tabs = event['snapshot'].data['tabs']
        this.empty = this.tabs === this.gestion || this.tabs === this.general        
      })
  }
  
  generalTabActive() {    
    return this.tabs === this.general
  }  
  
  gestionTabActive() {
    return this.tabs === this.gestion
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

}
