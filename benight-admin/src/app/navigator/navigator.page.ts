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

  /*mainTabs:{href:string,title:string}[] = tabs.main
  gestionTabs:{href:string,title:string}[] = tabs.gestion
  generalTabs:{href:string,title:string}[] = tabs.general*/
  
  botTabs:{href:string,title:string,icon:string}[] = tabs.main
  topTabs:{href:string,title:string}[] = tabs.gestion

  //database:any = database
  header:string = "Eventos"
  back:boolean = false
  hasTop:boolean = true

  /*empty:boolean = true
  tabs: number = tabs.gestion

  general: number = tabs.general
  gestion: number = tabs.gestion*/

  constructor(public feed: DataFeedService, private router: Router) { }
  
  ngOnInit() {
    //Handle Title
    this.router.events.pipe( 
      filter(event => event instanceof ActivationStart) )
      .subscribe(event => { 
        this.back = (event as any)['snapshot'] .data['back']
        this.header = (event as any)['snapshot'].data['header']        
        this.hasTop = (event as any)['snapshot'].data['hasTop']        
        this.topTabs = (event as any)['snapshot'].data['tabs']        
      })
  }

}
