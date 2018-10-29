import { Component, OnInit } from '@angular/core'
import { DataFeedService } from '@bn8-services/data-feed.service'
import { database } from '@bn8-constants/constants.database'
import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'

@Component({
  selector: 'gestion-entradas',
  templateUrl: './entradas.page.html',
  styleUrls: ['./entradas.page.scss'],
})
export class EntradasPage implements OnInit {
  
  entradas: Observable<any>

  constructor(
    private feed: DataFeedService,
    private fc: FirebaseClient,
    private router: Router
  ) {}

  private basehref:string = ''
  public default:string = '' 
  public create:string = database.actions.create
  public edit:string =  database.actions.edit

  async ngOnInit() {
    this.entradas = await this.feed.get(database.variables.ticket)
    this.basehref = this.router.url.slice(0,this.router.url.lastIndexOf('/'))
    this.default = this.fc.afs().createId()
  }

  goto(path:string,data:string) {    
    //this.feed.next(database.VAR_BACK_URL,`${this.basehref}/entradas`)       
    //If default, renew id
    if (data = this.default)
      this.default = this.fc.afs().createId()
    this.router.navigate([`${this.basehref}/entradas/${path}`,data])
  }

  trackById(idx:number, todo:any) {
    return todo.id
  }
}
