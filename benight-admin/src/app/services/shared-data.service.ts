import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { filter } from 'rxjs/operators'
import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { AuthService } from '@bn8-services/auth.service'
import { database } from '@bn8-database/interfaces'

@Injectable({
  providedIn: 'root'
})
export class SharedDataService{
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
        this.observable$[index] = (new database.FN_CHAT(this.db, this.auth)).fetch()
        break
      case database.VAR_CLUBS:
        this.observable$[index] = (new database.FN_CLUBS(this.db, this.auth)).fetch()
        break
      case database.VAR_DATE:
        this.observable$[index] = (new database.FN_DATE(this.db, this.auth)).fetch()
        break
      case database.VAR_EMPLOYEE:
        this.observable$[index] = (new database.FN_EMPLOYEE(this.db, this.auth)).fetch()
        break
      case database.VAR_EVENTS:
        this.observable$[index] = (new database.FN_EVENTS(this.db, this.auth)).fetch()
        break
      case database.VAR_FILE:
        this.observable$[index] = (new database.FN_FILE(this.db, this.auth)).fetch()
        break
      case database.VAR_LISTS:
        this.observable$[index] = (new database.FN_LISTS(this.db, this.auth)).fetch()
        break
      case database.VAR_NOTIFICATIONS:
        this.observable$[index] = (new database.FN_NOTIFICATIONS(this.db, this.auth)).fetch()
        break
      case database.VAR_OWNERS:
        this.observable$[index] = (new database.FN_OWNERS(this.db, this.auth)).fetch()
        break
      case database.VAR_PLANS:
        this.observable$[index] = (new database.FN_PLANS(this.db, this.auth)).fetch()
        break
      case database.VAR_PROMOS:
        this.observable$[index] = (new database.FN_PROMOS(this.db, this.auth)).fetch()
        break
      case database.VAR_PUBLIC_RULES:
        this.observable$[index] = (new database.FN_PUBLIC_RULES(this.db, this.auth)).fetch()
        break
      case database.VAR_REQUIREMENTS:
        this.observable$[index] = (new database.FN_REQUIREMENTS(this.db, this.auth)).fetch()
        break
      case database.VAR_STATISTICS:
        this.observable$[index] = (new database.FN_STATISTICS(this.db, this.auth)).fetch()
        break
      case database.VAR_TAGS:
        this.observable$[index] = (new database.FN_TAGS(this.db, this.auth)).fetch()
        break
      case database.VAR_TICKET:
        this.observable$[index] = (new database.FN_TICKET(this.db, this.auth)).fetch()
        break
    }
        
    this.accesed[index] = true
  }

  set(index,data) {
    this.observable$[index] = of(data)
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