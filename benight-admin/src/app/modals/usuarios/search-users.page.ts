import { Component, AfterViewInit, Input, OnDestroy } from '@angular/core'
import { Observable, of, BehaviorSubject } from 'rxjs'
import { DataFeedService } from '@bn8-services/data-feed.service'
import { database } from '@bn8-core/constants/constants.database'
import { map, tap } from 'rxjs/operators'


@Component({
  selector: 'search-users',
  templateUrl: './search-users.page.html',
  styleUrls: ['./search-users.page.scss'],
})
export class SearchUsersPage implements AfterViewInit, OnDestroy {  

  users$: Observable<any> = of(null)
  filter: string = ''
  filter2: BehaviorSubject<string> = new BehaviorSubject('')
  @Input() search: string
  constructor(private feed: DataFeedService) {}
  
  ngAfterViewInit() {    
    this.filter2.subscribe(filter =>{
      console.log(filter, `${database.literal[this.search]}`)
      if (filter.length > 2)
        this.users$ = this.feed.fetch(database.literal[this.search]).pipe(
          tap(e=>console.log(e)),
          map(users =>  {
            if(users) 
              return (users as Array<any>).filter(user => user.displayName.toLowerCase().includes(filter) || user.email.toLowerCase().includes(filter))
            return users
          }))
      else
        this.users$ = of(null)
    })
  }

  trackById(idx:number, todo:any) {
    return todo.id
  }

  actualize(e) {
    this.filter2.next(e.detail.value)
  }

  invite(id:string) {
    console.log(id)
  }

  ngOnDestroy() {
    this.filter2.unsubscribe()
  }

}