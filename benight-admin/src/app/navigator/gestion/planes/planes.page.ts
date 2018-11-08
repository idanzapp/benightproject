import { Component, OnInit } from '@angular/core'
import { DataFeedService } from '@bn8-services/data-feed.service'
import { database } from '@bn8-constants/constants.database'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'

@Component({
  selector: 'gestion-planes',
  templateUrl: './planes.page.html',
  styleUrls: ['./planes.page.scss'],
})
export class PlanesPage implements OnInit{
  
  plans$: Observable<any>
  private basehref:string = ''

  constructor(
    private feed: DataFeedService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.plans$ = await this.feed.fetch(database.literal.plans)
    this.basehref = this.router.url.slice(0, this.router.url.lastIndexOf('/'))
  }

  async goto(id?:string) {
    id ? id : await this.feed.add(database.literal.plans) 
    this.router.navigate([`${this.basehref}/plans/${database.actions.edit}`, id])
  }

  trackById(idx:number, todo:any) {
    return todo.id
  }

}
