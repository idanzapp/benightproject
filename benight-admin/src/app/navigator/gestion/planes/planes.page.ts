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
export class PlanesPage implements OnInit {

  plans$: Observable<any>
  private basehref:string = ''

  constructor(private feed: DataFeedService,private router: Router) {}

  ngOnInit() {
    this.plans$ = this.feed.fetch(database.literal.locations)
    this.basehref = this.router.url.slice(0, this.router.url.lastIndexOf('/'))
  }

  async goto(id?:string) {
    if (!id) 
      id = await this.feed.add(database.literal.locations) 
    this.router.navigate([`${this.basehref}/planes/${database.actions.edit}`, id])
  }

  trackById(idx:number, todo:any) {
    return todo.id
  }
}
