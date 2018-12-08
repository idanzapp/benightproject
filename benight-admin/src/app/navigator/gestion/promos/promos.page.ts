import { Component, OnInit } from '@angular/core'
import { DataFeedService } from '@bn8-services/data-feed.service'
import { database } from '@bn8-constants/constants.database'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'

@Component({
  selector: 'gestion-promos',
  templateUrl: './promos.page.html',
  styleUrls: ['./promos.page.scss'],
})
export class PromosPage implements OnInit{

  
  promos$: Observable<any>
  private basehref:string = ''

  constructor(
    private feed: DataFeedService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.promos$ = await this.feed.fetch(database.literal.promos)
    this.basehref = this.router.url.slice(0, this.router.url.lastIndexOf('/'))
  }

  async goto(id?:string) {
    id ? id : await this.feed.add(database.literal.promos) 
    this.router.navigate([`${this.basehref}/promos/${database.actions.edit}`, id])
  }

  trackById(idx:number, todo:any) {
    return todo.id
  }

  remove(promo) {
    console.log(promo)
  }
}
