import { Component} from '@angular/core'
import { BansDatabase } from '@bn8-database/bans.database'
import { Observable } from 'rxjs'

@Component({
  selector: 'general-bans',
  templateUrl: './bans.page.html',
  styleUrls: ['./bans.page.scss'],
})
export class BansPage{

  bans$: Observable<any>
  constructor(private feed: BansDatabase) { }

  ngOnInit(){
    this.bans$ = this.feed.fetch()
  }

  remove(eid:string) {
    this.feed.remove(eid)}
}