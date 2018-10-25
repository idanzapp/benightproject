import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { filter } from 'rxjs/operators'
import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { AuthService } from '@bn8-services/auth.service'
import { database } from '@bn8-interfaces/interfaces.database'

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

@Injectable({
  providedIn: 'root'
})
export class DataFeedService{
  private accesed: boolean[] = []
  private observable$: Observable<any>[] = []
  private connection: any[] = []
  private static$: any[] = []

  constructor(private db: FirebaseClient, private auth: AuthService) {
    //array fill accesed with 20 false elements
    let _size = 20
    while (_size--)  this.accesed.push(false)
  }
  
  private setConnection(index:number) {
    switch (index) {
      case database.VAR_CHAT:
        this.connection[index] = new FN_CHAT(this.db, this.auth)
        break
      case database.VAR_CLUBS:
        this.connection[index] = new FN_CLUBS(this.db, this.auth)
        break
      case database.VAR_DATE:
        this.connection[index] = new FN_DATE(this.db, this.auth)
        break
      case database.VAR_EMPLOYEE:
        this.connection[index] = new FN_EMPLOYEE(this.db, this.auth)
        break
      case database.VAR_EVENTS:
        this.connection[index] = new FN_EVENTS(this.db, this.auth)
        break
      case database.VAR_FILE:
        this.connection[index] = new FN_FILE(this.db, this.auth)
        break
      case database.VAR_LISTS:
        this.connection[index] = new FN_LISTS(this.db, this.auth)
        break
      case database.VAR_NOTIFICATIONS:
        this.connection[index] = new FN_NOTIFICATIONS(this.db, this.auth)
        break
      case database.VAR_OWNERS:
        this.connection[index] = new FN_OWNERS(this.db, this.auth)
        break
      case database.VAR_PLANS:
        this.connection[index] = new FN_PLANS(this.db, this.auth)
        break
      case database.VAR_PROMOS:
        this.connection[index] = new FN_PROMOS(this.db, this.auth)
        break
      case database.VAR_PUBLIC_RULES:
        this.connection[index] = new FN_PUBLIC_RULES(this.db, this.auth)
        break
      case database.VAR_REQUIREMENTS:
        this.connection[index] = new FN_REQUIREMENTS(this.db, this.auth)
        break
      case database.VAR_STATISTICS:
        this.connection[index] = new FN_STATISTICS(this.db, this.auth)
        break
      case database.VAR_TAGS:
        this.connection[index] = new FN_TAGS(this.db, this.auth)
        break
      case database.VAR_TICKET:
        this.connection[index] = new FN_TICKET(this.db, this.auth)
        break
      default:
        //Asigna el observador null
        this.static$[index-database.VAR_OBSERVER_LONG] = null
        break
    }        
    this.accesed[index] = true
  }

  next(variable,data) {
    //Only for non observers    
    if (variable > database.VAR_OBSERVER_LONG - 1) {
      this.static$[variable-database.VAR_OBSERVER_LONG] =  data ? data : null
      if (!this.accesed[variable])
        this.accesed[variable] = true
    }    
  }

  async get(variable) {
    //Charge data on Demand
    if (!this.accesed[variable]) 
      await this.setConnection(variable)     
    if (variable > database.VAR_OBSERVER_LONG - 1)
      return this.static$[variable-database.VAR_OBSERVER_LONG]
    else
      return this.connection[variable].fetch()         
  }

  getItem(variable,id) {
    //only for Observer
    if (variable && id && this.accesed[variable] && variable < database.VAR_OBSERVER_LONG )
      return (this.connection[variable].fetch() as Observable<any>).pipe(filter(item => item.uid === id))
    return of(null)
  }


  async create(variable) {
    //Charge data on Demand
    if (!this.accesed[variable]) 
      await this.setConnection(variable)     
    if (variable > database.VAR_OBSERVER_LONG - 1)
      return this.static$[variable-database.VAR_OBSERVER_LONG]
    else
      return this.connection[variable].create()

  }
}