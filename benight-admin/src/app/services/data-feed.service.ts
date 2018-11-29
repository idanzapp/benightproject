import { Injectable } from '@angular/core'
import { of } from 'rxjs'

import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { AuthService } from '@bn8-services/auth.service'
import { Connection } from '@bn8-interfaces/interfaces.datafeed'

//Database imports Functions
import { BansDatabase } from '@bn8-database/bans.database'
import { ChatDatabase } from '@bn8-database/chat.database'
import { LocationDatabase } from '@bn8-services/database/location.database'
import { EmployeeDatabase } from '@bn8-database/employee.database'
import { EventsDatabase } from '@bn8-database/events.database'
import { RequirementsDatabase } from '@bn8-database/requirements.database'
import { TagsDatabase } from '@bn8-database/tags.database'
import { TicketDatabase } from '@bn8-database/ticket.database'
import { InfoDatabase } from '@bn8-database/info.database'
import { MessagesDatabase } from '@bn8-database/messages.database'
import { AdminsDatabase } from '@bn8-database/admins.database'
import { EmployeesDatabase } from '@bn8-database/employees.database'
import { NotificationsDatabase } from '@bn8-database/notifications.database'
import { PromoDatabase } from '@bn8-database/promos.database'
import { DefaultDatabase } from '@bn8-database/default.database'
import { DatesDatabase } from '@bn8-database/dates.database'
import { GalleryDatabase } from '@bn8-database/gallery.database'
import { ListsDatabase } from '@bn8-database/lists.database'

@Injectable({
  providedIn: 'root'
})
export class DataFeedService {

  private connection: Connection = {}

  private action = {
    fetch: (e) => e.fetch(),
    get: (e,data) => e.get(data),
    getField: (e,data) => e.getField(data),
    create: (e,id) => e.create(id),
    delete: (e) => e.delete(),
    save: (e,data) => e.save(data),
    remove: (e,id) => e.remove(id),
    erase: (e,data) => e.remove(data),
    add: (e,data?) => e.add(data),
    add2List: (e,data?) => e.add2List(data),
    //copy: (e,data?) => e.copy()
  }

  constructor(private db: FirebaseClient, private auth: AuthService) {
    this.connection = {
      bans: new BansDatabase(this.db, this.auth),
      chats:  new ChatDatabase(this.db, this.auth),
      locations:  new LocationDatabase(this.db, this.auth),
      employee:  new EmployeeDatabase(this.db, this.auth),
      events:  new EventsDatabase(this.db, this.auth),
      requirements:  new RequirementsDatabase(this.db),
      tags:  new TagsDatabase(this.db),
      tickets:  new TicketDatabase(this.db, this.auth),
      info: new InfoDatabase(this.auth),
      messages: new MessagesDatabase(this.db,this.auth),
      admins: new AdminsDatabase(this.db),
      employees: new EmployeesDatabase(this.db),
      notifications: new NotificationsDatabase(this.db,this.auth),
      promos: new PromoDatabase(this.db,this.auth),
      default:  new DefaultDatabase(this.db,this.auth),
      dates: new DatesDatabase(this.db),
      gallery: new GalleryDatabase(this.db,this.auth),
      lists: new ListsDatabase(this.db) 
    }
  }

  private checkProperty (property:string, action:string, data?:any) {     
    if (property in this.connection)
      return this.action[action](this.connection[property], data)
    return of(null)
  }

  fetch(property:string) {return this.checkProperty(property,'fetch')}
  get(property: string, data: any) {return this.checkProperty(property,'get',data)}
  getField(property: string, data: any) {return this.checkProperty(property,'getField',data)}
  create(property:string) {return this.checkProperty(property,'create')} 
  delete(property: string) {return this.checkProperty(property,'delete')}
  save(property: string, data:any) {return this.checkProperty(property,'save',data)}
  remove(property: string, id:string) {return this.checkProperty(property,'remove',id)}
  erase(property: string, data:any) {return this.checkProperty(property,'erase',data)}
  add(property: string, data?:any) {return this.checkProperty(property,'add',data)}
  addToList(property: string, data?:any) {return this.checkProperty(property,'add2List',data)}
  //copy(property: string, data?:any) {return this.checkProperty(property,'copy')}
}