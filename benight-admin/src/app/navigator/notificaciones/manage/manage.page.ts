import { Component, OnInit } from '@angular/core'
import { DataFeedService } from '@bn8-services/data-feed.service'
import { database } from '@bn8-constants/constants.database'
import { Observable } from 'rxjs'

@Component({
  selector: 'notifications-manage',
  templateUrl: './manage.page.html',
  styleUrls: ['./manage.page.scss'],
})
export class ManagePage implements OnInit {

  notificaciones$: Observable<any>

  constructor(private feed: DataFeedService) {}

  ngOnInit() {
    this.notificaciones$ = this.feed.getField(database.literal.notifications, {field: 'sent'})
  }

  trackById(idx:number, todo:any) {
    return todo.id
  }
}