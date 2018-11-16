import { Component, AfterViewInit, Input } from '@angular/core'
import { Observable } from 'rxjs'
import { DataFeedService } from '@bn8-services/data-feed.service'
import { database } from '@bn8-core/constants/constants.database'


@Component({
  selector: 'search-users',
  templateUrl: './search-users.page.html',
  styleUrls: ['./search-users.page.scss'],
})
export class SearchUsersPage implements AfterViewInit {

  users$: Observable<any>
  filter: string = ''
  @Input() search: string
  constructor(private feed: DataFeedService) {}
  
  ngAfterViewInit() {
    this.users$ = this.feed.get(database.literal[this.search], this.filter)
  }

  trackById(idx:number, todo:any) {
    return todo.id
  }

}