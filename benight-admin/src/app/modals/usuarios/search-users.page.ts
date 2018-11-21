import { Component, AfterViewInit, Input, OnDestroy } from '@angular/core'
import { Observable, of, BehaviorSubject } from 'rxjs'
import { DataFeedService } from '@bn8-services/data-feed.service'
import { database } from '@bn8-core/constants/constants.database'
import { map, tap } from 'rxjs/operators'
import { AuthService } from '@bn8-services/auth.service'

@Component({
  selector: 'search-users',
  templateUrl: './search-users.page.html',
  styleUrls: ['./search-users.page.scss'],
})
export class SearchUsersPage implements AfterViewInit, OnDestroy {  

  users$: Observable<any> = of(null)
  filter: BehaviorSubject<string> = new BehaviorSubject('')
  private sender

  @Input() search: string
  constructor(private feed: DataFeedService, private auth: AuthService) {}
  
  async ngAfterViewInit() {
    this.sender = await this.auth.user()
    this.filter.subscribe(filter =>{
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
    this.filter.next(e.detail.value)
  }

  invite(data:any) {
    console.log(data.id)
    switch(this.search) {
      case 'admins':   
        this.feed.add(database.literal.notifications,{to: data.id, type:'admin', actions:['aceptar', 'rechazar'], body:`Hola ${data.displayName}, soy ${data.userName} y te invito a unirte a ser copropietario de X con las condiciones tal`})
        break
        case 'employees':  
        this.feed.add(database.literal.notifications,{to: data.id, type:'employee', actions:['aceptar', 'rechazar'], body:`Hola ${data.displayName}, soy ${data.userName} y te invito a unirte a mis empleados con las condiciones tal`})
        break      
    }

  }

  ngOnDestroy() {
    this.filter.unsubscribe()
  }

}