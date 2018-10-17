import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { filter } from 'rxjs/operators'
import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { AuthService } from '@bn8-services/auth.service'
import { database } from '@bn8-database/interfaces'

//Database imports Functions
import { ChatDatabase as FN_CHAT } from '@bn8-database/chat.database'
import { ClubsDatabase as FN_CLUBS} from '@bn8-database/clubs.database'
import { DateDatabase as FN_DATE} from '@bn8-database/date.database'
import { EmployeeDatabase as FN_EMPLOYEE} from '@bn8-database/employee.database'
import { EventsDatabase as FN_EVENTS} from '@bn8-database/events.database'
import { FileBucket as FN_FILE} from '@bn8-database/file.bucket'
import { ListsDatabase as FN_LISTS} from '@bn8-database/lists.database'
import { NotificationsDatabase as FN_NOTIFICATIONS} from '@bn8-database/notifications.database'
import { OwnersDatabase as FN_OWNERS} from '@bn8-database/owners.database'
import { PlansDatabase as FN_PLANS} from '@bn8-database/plans.database'
import { PromosDatabase as FN_PROMOS} from '@bn8-database/promos.database'
import { PublicRulesDatabase as FN_PUBLIC_RULES} from '@bn8-database/public-rules.database'
import { RequirementsDatabase as FN_REQUIREMENTS} from '@bn8-database/requirements.database'
import { StatisticsDatabase as FN_STATISTICS} from '@bn8-database/statistics.database'
import { TagsDatabase as FN_TAGS} from '@bn8-database/tags.database'
import { TicketDatabase as FN_TICKET} from '@bn8-database/ticket.database'

export { database } from '@bn8-database/interfaces'

@Injectable({
  providedIn: 'root'
})
export class DataFeedService{
  private accesed: boolean[] = []
  private observable$: Observable<any>[] = []

  constructor(private db: FirebaseClient, private auth: AuthService) {
    //array fill accesed with 20 false elements
    let _size = 20
    while (_size--)  this.accesed.push(false) 
  }
  
  private setObservable$(index:number) {
    switch (index) {
      case database.VAR_CHAT:
        this.observable$[index] = (new FN_CHAT(this.db, this.auth)).fetch()
        break
      case database.VAR_CLUBS:
        this.observable$[index] = (new FN_CLUBS(this.db, this.auth)).fetch()
        break
      case database.VAR_DATE:
        this.observable$[index] = (new FN_DATE(this.db, this.auth)).fetch()
        break
      case database.VAR_EMPLOYEE:
        this.observable$[index] = (new FN_EMPLOYEE(this.db, this.auth)).fetch()
        break
      case database.VAR_EVENTS:
        this.observable$[index] = (new FN_EVENTS(this.db, this.auth)).fetch()
        break
      case database.VAR_FILE:
        this.observable$[index] = (new FN_FILE(this.db, this.auth)).fetch()
        break
      case database.VAR_LISTS:
        this.observable$[index] = (new FN_LISTS(this.db, this.auth)).fetch()
        break
      case database.VAR_NOTIFICATIONS:
        this.observable$[index] = (new FN_NOTIFICATIONS(this.db, this.auth)).fetch()
        break
      case database.VAR_OWNERS:
        this.observable$[index] = (new FN_OWNERS(this.db, this.auth)).fetch()
        break
      case database.VAR_PLANS:
        this.observable$[index] = (new FN_PLANS(this.db, this.auth)).fetch()
        break
      case database.VAR_PROMOS:
        this.observable$[index] = (new FN_PROMOS(this.db, this.auth)).fetch()
        break
      case database.VAR_PUBLIC_RULES:
        this.observable$[index] = (new FN_PUBLIC_RULES(this.db, this.auth)).fetch()
        break
      case database.VAR_REQUIREMENTS:
        this.observable$[index] = (new FN_REQUIREMENTS(this.db, this.auth)).fetch()
        break
      case database.VAR_STATISTICS:
        this.observable$[index] = (new FN_STATISTICS(this.db, this.auth)).fetch()
        break
      case database.VAR_TAGS:
        this.observable$[index] = (new FN_TAGS(this.db, this.auth)).fetch()
        break
      case database.VAR_TICKET:
        this.observable$[index] = (new FN_TICKET(this.db, this.auth)).fetch()
        break
      default:
        //Asigna el observador null
        this.observable$[index] = of(null)
        break
    }        
    this.accesed[index] = true
  }

  next(variable,data) {
    // > 16 son los observables no obtenidos de la BD sino generados por la APP
    if (variable > 16) {
      this.observable$[variable] = this.observable$[variable] ? data ? of(data) : this.observable$[variable] : of(null)
      if (!this.accesed[variable])
        this.accesed[variable] = true
    }
  }

  get(variable) {
    if (!this.accesed[variable]) 
      this.setObservable$(variable)     
    return this.observable$[variable]      
  }

  getItem(variable,id) {
        if (variable && id && this.accesed[variable])
          return this.observable$[variable].pipe(filter(item => item.uid === id))
        return of(null)
  }
}