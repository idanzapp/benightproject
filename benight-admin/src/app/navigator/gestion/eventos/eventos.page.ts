import { Component, OnInit } from '@angular/core'
import { DataFeedService, database } from '@bn8-services/data-feed.service'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'

@Component({
  selector: 'gestion-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {
  
  events: Observable<any>

  constructor(
    private feed: DataFeedService,
    private router: Router
  ) {}

  private basehref 
  public default  

  async ngOnInit() {
    this.feed.next(database.VAR_HEADER, 'Eventos')
    this.feed.next(database.VAR_BACK, false)
    this.events = await this.feed.get(database.VAR_EVENTS)
    this.basehref = this.router.url.slice(0,this.router.url.lastIndexOf('/'))
    this.default = this.createDefault()
  }

  private createDefault(){
    return {}
  }

  goto(path,data) {    
    this.feed.next(database.VAR_BACK, true)
    this.feed.next(database.VAR_BACK_URL,`${this.basehref}/eventos`)       
    
    this.router.navigate([`${this.basehref}/eventos/${path}`,data])
  }

  trackById(idx, todo) {
    return todo.id
  }

}