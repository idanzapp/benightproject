import { Component, OnInit } from '@angular/core'
import { DataFeedService } from '@bn8-services/data-feed.service'
import { database } from '@bn8-constants/constants.database'
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

  private basehref:string = ''

  async ngOnInit() {
    this.events = await this.feed.get(database.literal.events)
    this.basehref = this.router.url.slice(0, this.router.url.lastIndexOf('/'))
  }

  async goto(id?:string) {
    //this.feed.next(database.VAR_BACK_URL, `${this.basehref}/eventos`)
    //If default, renew id    
    if (id)
      id = await this.feed.create(database.literal.events) 
    this.router.navigate([`${this.basehref}/eventos/${database.actions.edit}`, id])
  }

  trackById(idx:number, todo:any) {
    return todo.id
  }
}