
import { OnDestroy } from '@angular/core'
import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database } from '@bn8-constants/constants.database'
import { AuthService } from '@bn8-services/auth.service'
import { Observable, of, BehaviorSubject, Subscription } from 'rxjs'
import { map, shareReplay, tap } from 'rxjs/operators'

export class PromoDatabase implements OnDestroy{
    private promos$: Observable<any> = of(null)
    private encondedData$: Subscription
    private subject$: BehaviorSubject<any> = new BehaviorSubject(null)
    private uid$

    constructor(private fc: FirebaseClient, private auth: AuthService) {this.preloadData()}

    private async preloadData() {
        this.uid$ = await this.auth.uid()
        this.promos$ = await this.fc.collection$(`${database.tables.promos}/${this.uid$}/${database.list.promo}`, {db: database.connections.admin})
            .pipe(shareReplay(1))
        this.encondedData$ = this.promos$.pipe(            
            tap(e =>  this.subject$.next((e as Array<any>)
            .map( e => {   
                return {
                    title: e.displayName,
                    subtitle: e.description,
                    avatar: 'assets/img/avatar.png'
                }                                    
            })))).subscribe()
    }
    
    fetch() {
        return this.promos$
    }

    ngOnDestroy() {
        this.encondedData$.unsubscribe()
    }

    fetch2() {
        return this.subject$
    }

    get(id:string) {
        return this.promos$.pipe(map(e => e.filter(u => u.id === id)[0]))
    }

    getField(data:any) {
        return this.get(data.id).pipe(map( u => u && u[data.field]))
    }

    remove (eid:string) {
        let check = false
        if (check)
            this.fc.delete(`${database.tables.promos}/${this.uid$}/${database.list.promo}/${eid}`,database.connections.admin)
        return check            
    }

    save(data:any) {
        this.fc.updateAt(`${database.tables.promos}/${this.uid$}/${database.list.promo}/${data.uid}`, data, database.connections.admin)
        return data.uid
    }

    async add (data?:any) {
        let uid = this.fc.createId(database.connections.admin)
        let item
        if (data)  
            item = data
        else             
            item = this.getDefault()
        let date = new Date().toISOString()
        this.save({...item, uid:uid, createdAt: date})
        if(!data) //It should be removed after defaultCreation
            this.fc.updateAt(`${database.tables.promos}/${this.uid$}/${database.list.promo}/${uid}/${database.list.date}/${date}`, {}, database.connections.admin)        
        return uid
    }

    private getDefault() {
        let date = new Date().toISOString()
        return {/*...defaultTicket,*/ date: date, expiresAt: date, openAt: date, nextDate: date, closeAt: date}
    }
}


/*
const defaultTicket = {
    expires:true,
    relativeTo: database.fields.date,
    type: 'ticket',
    gaugin: -1,
    name: 'ticket prueba',
    description: 'ticket description',
    uses:-1,
    price:0
}*/

