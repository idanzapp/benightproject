import { Injectable } from '@angular/core'

import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { AuthService } from '@bn8-services/auth.service'
import { Connection } from '@bn8-interfaces/interfaces.datafeed'

//Database imports Functions
import { BansDatabase } from '@bn8-database/bans.database'
import { ChatDatabase } from '@bn8-database/chat.database'
import { LocationDatabase } from '@bn8-services/database/location.database'
import { PlansDatabase } from '@bn8-services/database/plans.database'
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
  
  private onDemand = {
    bans: (db,auth) => new BansDatabase(db, auth),
    chats:  (db,auth) => new ChatDatabase(db, auth),
    locations:  (db,auth) => new LocationDatabase(db, auth),
    plans:  (db,auth) => new PlansDatabase(db, auth),
    employee:  (db,auth) => new EmployeeDatabase(db, auth),
    events:  (db,auth) => new EventsDatabase(db, auth),
    requirements:  (db) => new RequirementsDatabase(db),
    tickets:  (db,auth) => new TicketDatabase(db, auth),
    messages: (db,auth) => new MessagesDatabase(db,auth),
    notifications: (db,auth) => new NotificationsDatabase(db,auth),
    promos: (db,auth) => new PromoDatabase(db,auth),
    default:  (db,auth) => new DefaultDatabase(db,auth),
    gallery: (db,auth) => new GalleryDatabase(db,auth),
    tags:  (db) => new TagsDatabase(db),
    admins: (db) => new AdminsDatabase(db),
    employees: (db) => new EmployeesDatabase(db),
    dates: (db) => new DatesDatabase(db),
    lists: (db) => new ListsDatabase(db), 
    info: (auth) => new InfoDatabase(auth)
  }

  private imports = { bans: 0, chats: 0, locations: 0, plans: 0, employee: 0, events: 0,
    requirements: 0, tickets: 0, messages: 0, notifications: 0, promos: 0, default: 0,
    gallery: 0, tags: 1, admins: 1, employees: 1, dates: 1, lists: 1, info: 2
  }

  private action = {
    fetch: (e) => e.fetch(),
    fetch2: (e) => e.fetch2(),
    get: (e,data) => e.get(data),
    getField: (e,data) => e.getField(data),
    create: (e,id) => e.create(id),
    delete: (e) => e.delete(),
    save: (e,data) => e.save(data),
    remove: (e,id) => e.remove(id),
    erase: (e,data) => e.remove(data),
    add: (e,data?) => e.add(data),
    add2List: (e,data?) => e.add2List(data)
  }

  constructor(private db: FirebaseClient, private auth: AuthService) {}  

  fetch(property:string) {return this.checkProperty(property,'fetch')}
  fetch2(property:string) {return this.checkProperty(property,'fetch2')}
  get(property: string, data: any) {return this.checkProperty(property,'get',data)}
  getField(property: string, data: any) {return this.checkProperty(property,'getField',data)}
  create(property:string) {return this.checkProperty(property,'create')} 
  delete(property: string) {return this.checkProperty(property,'delete')}
  save(property: string, data:any) {return this.checkProperty(property,'save',data)}
  remove(property: string, id:string) {return this.checkProperty(property,'remove',id)}
  erase(property: string, data:any) {return this.checkProperty(property,'erase',data)}
  add(property: string, data?:any) {return this.checkProperty(property,'add',data)}
  addToList(property: string, data?:any) {return this.checkProperty(property,'add2List',data)}

  getImage(url:string) {     
    return this.getUid(url)
  }

  private charge(property) {
    switch (this.imports[property]) {
      case 0:
        return this.onDemand[property](this.db,this.auth)
      case 1:      
        return this.onDemand[property](this.db)
      case 2:      
        return this.onDemand[property](this.auth)
    }
  }

  private checkProperty(property:string, action:string, data?:any) {
    if (!this.connection.hasOwnProperty(property)) 
      this.connection[property] = this.charge(property) 
    return this.action[action](this.connection[property], data)
  }

  private async getUid(url:string) {
    let uid$ = await this.auth.uid()
    return this.db.storage().ref(`${uid$}/locations/${url}`).getDownloadURL()
  }
}