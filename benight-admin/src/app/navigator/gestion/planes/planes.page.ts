import { Component, OnInit } from '@angular/core'
import { DataFeedService } from '@bn8-services/data-feed.service'
import { database } from '@bn8-constants/constants.database'
import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'

@Component({
  selector: 'gestion-planes',
  templateUrl: './planes.page.html',
  styleUrls: ['./planes.page.scss'],
})
export class PlanesPage implements OnInit{
  
  plans: Observable<any>

  constructor(
    private feed: DataFeedService,
    private fc: FirebaseClient,
    private router: Router
  ) {}

  private basehref:string = ''

  async ngOnInit() {
    this.plans = await this.feed.get(database.literal.plans)
    this.basehref = this.router.url.slice(0,this.router.url.lastIndexOf('/'))
  }

  async goto(id?:string) {    
    //this.feed.next(database.VAR_BACK_URL,`${this.basehref}/planes`)       
    //If default, renew id
    if (id)
      id = await this.feed.create(database.literal.plans) 
      this.router.navigate([`${this.basehref}/planes/${database.actions.edit}`, id])
  }

  trackById(idx:number, todo:any) {
    return todo.id
  }

}
