import { Component, OnInit } from '@angular/core'
import { DataFeedService } from '@bn8-services/data-feed.service'
import { database } from '@bn8-constants/constants.database'
import { tabs } from '@bn8-constants/constants.tabs'
import { Router, ActivationStart } from '@angular/router'
import { filter} from 'rxjs/operators'

@Component({
  selector: 'navigator',
  templateUrl: './navigator.page.html',
  styleUrls: ['./navigator.page.scss'],
})
export class NavigatorPage implements OnInit {

  mainTabs:{href:string,title:string}[] = tabs.mainTabs
  gestionTabs:{href:string,title:string}[] = tabs.gestionTabs
  generalTabs:{href:string,title:string}[] = tabs.generalTabs
  
  database:any = database
  header:string = "Eventos"
  back:boolean = false

  empty:boolean = true
  tabs: number = tabs.gestion

  general: number = tabs.general
  gestion: number = tabs.gestion

  constructor(public feed: DataFeedService, private router: Router) { }
  
  ngOnInit() {
    //Handle Title
    this.router.events.pipe( 
      filter(event => event instanceof ActivationStart) )
      .subscribe(event => { 
        this.back = (event as any)['snapshot'] .data['back']
        this.header = (event as any)['snapshot'].data['header']
        this.tabs = (event as any)['snapshot'].data['tabs']
        this.empty = this.tabs === this.gestion || this.tabs === this.general        
      })
  }
  
  backUrl(){
    return this.feed.get(database.VAR_BACK_URL)
  }

}
