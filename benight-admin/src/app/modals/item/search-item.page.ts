import { Component, AfterViewInit, Input, OnDestroy } from '@angular/core'
import { Observable, of, BehaviorSubject } from 'rxjs'
import { DataFeedService } from '@bn8-services/data-feed.service'
import { database } from '@bn8-core/constants/constants.database'
import { map } from 'rxjs/operators'

@Component({
  selector: 'search-item',
  templateUrl: './search-item.page.html',
  styleUrls: ['./search-item.page.scss'],
})
export class SearchItemsPage implements AfterViewInit, OnDestroy {

  items$: Observable<any> = of(null)
  filter: BehaviorSubject<string> = new BehaviorSubject('')

  @Input() search: string
  constructor(private feed: DataFeedService) { }

  async ngAfterViewInit() {
    this.filter.subscribe(filter => {
      this.items$ = this.feed.fetch(database.literal[this.search]).pipe(
        map(items => {
          if (items)
            return (items as Array<any>).filter(item => item.displayName.toLowerCase().includes(filter))
          return items
        }))
    })
  }

  trackById(idx: number, todo: any) {
    return todo.id
  }

  actualize(e) {
    this.filter.next(e.detail.value)
  }

  add(data: any) {
    //add to the list + add coords to markers
    console.log(data)
  }

  ngOnDestroy() {
    this.filter.unsubscribe()
  }

}