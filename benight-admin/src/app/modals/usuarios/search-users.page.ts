import { Component, AfterViewInit, Input } from '@angular/core'

@Component({
  selector: 'search-users',
  templateUrl: './search-users.page.html',
  styleUrls: ['./search-users.page.scss'],
})
export class SearchUsersPage implements AfterViewInit {

  @Input() search: string
  constructor() {}
  ngAfterViewInit() {console.log(this.search)}

}