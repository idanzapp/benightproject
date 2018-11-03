import { Component, OnInit } from '@angular/core'
import { DataFeedService } from '@bn8-services/data-feed.service'
import { database } from '@bn8-constants/constants.database'
import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'

@Component({
  selector: 'gestion-promos',
  templateUrl: './promos.page.html',
  styleUrls: ['./promos.page.scss'],
})
export class PromosPage implements OnInit{

  
  promos: Observable<any>

  constructor(
    private feed: DataFeedService,
    private fc: FirebaseClient,
    private router: Router
  ) {}

  private basehref:string = '' 

  async ngOnInit() {
    this.promos = await this.feed.get(database.literal.promos)
    this.basehref = this.router.url.slice(0,this.router.url.lastIndexOf('/'))
  }

  async goto(id?:string) {    
    //this.feed.next(database.VAR_BACK_URL,`${this.basehref}/promos`)       
    //If default, renew id
    if (id)
      id = await this.feed.create(database.literal.plans)
    this.router.navigate([`${this.basehref}/promos/${database.actions.edit}`,id])
  }

  trackById(idx:number, todo:any) {
    return todo.id
  }

}
