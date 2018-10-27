import { Component, OnInit } from '@angular/core'
import { DataFeedService } from '@bn8-services/data-feed.service'
import { database } from '@bn8-interfaces/interfaces.database'
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
  public default:string = ''
  public create:string = database.ACTION_CREATE
  public edit:string = database.ACTION_EDIT

  async ngOnInit() {
    this.events = await this.feed.get(database.VAR_EVENTS)
    this.basehref = this.router.url.slice(0, this.router.url.lastIndexOf('/'))
  }

  async goto(path:string, id:string) {
    this.feed.next(database.VAR_BACK_URL, `${this.basehref}/eventos`)
    //If default, renew id    
    if (path  === this.create)
      id = await this.feed.create(database.VAR_EVENTS) 
    this.router.navigate([`${this.basehref}/eventos/${this.edit}`, id])
  }

  trackById(idx:number, todo:any) {
    return todo.id
  }
}