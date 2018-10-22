import { Component, AfterViewInit } from '@angular/core'
import { DataFeedService, database } from '@bn8-services/data-feed.service'
import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'

@Component({
  selector: 'gestion-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements AfterViewInit {
  
  events: Observable<any>

  constructor(
    private feed: DataFeedService,
    private fc: FirebaseClient,
    private router: Router
  ) {}

  private basehref 
  public default  

  async ngAfterViewInit() {
    this.feed.next(database.VAR_HEADER, 'Eventos')
    this.feed.next(database.VAR_BACK, false)
    this.events = await this.feed.get(database.VAR_EVENTS)
    this.basehref = this.router.url.slice(0,this.router.url.lastIndexOf('/'))
    this.default = this.fc.afs().createId()
  }

  goto(path,data) {    
    this.feed.next(database.VAR_BACK, true)
    this.feed.next(database.VAR_BACK_URL,`${this.basehref}/eventos`)       
    //If default, renew id
    if (data = this.default)
      this.default = this.fc.afs().createId()
    this.router.navigate([`${this.basehref}/eventos/${path}`,data])
  }

  trackById(idx, todo) {
    return todo.id
  }

}