import { Component, OnInit } from '@angular/core'
import { DataFeedService } from '@bn8-services/data-feed.service'
import { database } from '@bn8-constants/constants.database'
import { Observable } from 'rxjs'

@Component({
  selector: 'notifications-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  notificaciones$: Observable<any>

  constructor(private feed: DataFeedService) {}

  ngOnInit() {
    this.notificaciones$ = this.feed.fetch(database.literal.notifications)
  }

  remove() {}

  trackById(idx:number, todo:any) {
    return todo.id
  }
/*
  runAction(fun: string, data?:any){
    let  funcion = eval( `${fun}`)
    return funcion(data)
  }*/

}