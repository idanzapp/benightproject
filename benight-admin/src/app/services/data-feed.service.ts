import { Injectable } from '@angular/core'
import { of } from 'rxjs'

import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { AuthService } from '@bn8-services/auth.service'
import { Connection } from '@bn8-interfaces/interfaces.datafeed'
import { database } from '@bn8-constants/constants.database'

//Database imports Functions
import { BansDatabase } from '@bn8-database/bans.database'
import { ChatDatabase } from '@bn8-database/chat.database'
import { LocationDatabase } from '@bn8-services/database/location.database'
import { EmployeeDatabase } from '@bn8-database/employee.database'
import { EventsDatabase } from '@bn8-database/events.database'
import { PlansDatabase } from '@bn8-database/plans.database'
import { RequirementsDatabase } from '@bn8-database/requirements.database'
import { TagsDatabase } from '@bn8-database/tags.database'
import { TicketDatabase } from '@bn8-database/ticket.database'
import { MarkersDatabase } from '@bn8-database/markers.database'

@Injectable({
  providedIn: 'root'
})
export class DataFeedService {

  private connection: Connection = {}
  private connectionLiteral = {
    bans: () => new BansDatabase(this.db, this.auth),
    chats: () => new ChatDatabase(this.db, this.auth),
    clubs: () => new LocationDatabase(this.db, this.auth),
    employees: () => new EmployeeDatabase(this.db, this.auth),
    events: () => new EventsDatabase(this.db, this.auth),
    plans: () => new PlansDatabase(this.db, this.auth),
    requirements: () => new RequirementsDatabase(this.db),
    tags: () => new TagsDatabase(this.db),
    tickets: () => new TicketDatabase(this.db, this.auth),
    markers: () => new MarkersDatabase(this.db, this.auth),
    default: () => of(null)
  }

  private action = {
    fetch: (e) => e.fetch(),
    get: (e,data) => e.get(data),
    getField: (e,data) => e.getField(data),
    create: (e,id) => e.create(id),
    delete: (e) => e.delete(),
    save: (e,data) => e.save(data),
    remove: (e,id) => e.remove(id),
    add: (e,data?) => e.add(data)
  }

  constructor(private db: FirebaseClient, private auth: AuthService) { }

  private checkProperty (property:string, action:string, data?:any) {
    if (property in this.connectionLiteral) {
      if (!(property in this.connection))
          this.connection[property] = this.connectionLiteral[property]()
      return data ? this.action[action](this.connection[property], data) : this.action[action](this.connection[property])    
    }      
  }

  fetch(property:string) {return this.checkProperty(property,'fetch')}
  get(property: string, id: string) {return this.checkProperty(property,'get',id)}
  getField(property: string, id: string) {return this.checkProperty(property,'getField',id)}
  create(property:string) {return this.checkProperty(property,'create')} 
  delete(property: string) {return this.checkProperty(property,'delete')}
  save(property: string, data:any) {return this.checkProperty(property,'save',data)}
  remove(property: string, id:string) {return this.checkProperty(property,'remove',id)}
  add(property: string, data?:any) {return this.checkProperty(property,'add',data)}
}