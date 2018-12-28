import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { AuthService } from '@bn8-services/auth.service'
import { database } from '@bn8-constants/constants.database'
import { Observable, of } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators'

export class DefaultDatabase {
    
    private default$: Observable<any> 
    private uid$

    private fields = {
        chat: of(null),
        employee: of(null),
        event: of(null),
        location: of(null),
        notification: of(null),
        plan: of(null),
        promo: of(null),
        ticket: of(null)
    }

    constructor(private fc: FirebaseClient, private auth: AuthService) {this.preloadData()}

    private async preloadData() {
        this.uid$ = await this.auth.uid()
        this.default$ = await this.fc.doc$(`${database.tables.default}/${this.uid$}`, database.connections.admin)
            .pipe(shareReplay(1))

        this.fields = {
            chat: this.default$.pipe(map( u => u && u[database.list.default.chat])),
            employee: this.default$.pipe(map( u => u && u[database.list.default.employee])),
            event: this.default$.pipe(map( u => u && u[database.list.default.event])),
            location: this.default$.pipe(map( u => u && u[database.list.default.location])),
            notification: this.default$.pipe(map( u => u && u[database.list.default.notification])),
            plan: this.default$.pipe(map( u => u && u[database.list.default.plan])),
            promo: this.default$.pipe(map( u => u && u[database.list.default.promo])),
            ticket: this.default$.pipe(map( u => u && u[database.list.default.ticket]))
        }   
    }
    
    fetch() {
        return this.default$
    }

    getField(data:any) {
        if (data.field in this.fields)
            return this.fields[data.field]
        return this.default$.pipe(map( u => u && u[data.field]))
    }

    save(data:any) {
        this.fc.updateAt(`${database.tables.default}/${this.uid$}`, data, database.connections.admin)
        return data.uid
    }

    /*copy() {
        this.fc.doc$(`${database.tables.default}/${this.uid$}`, database.connections.admin).pipe(
            tap( doc => this.fc.updateAt(`${database.tables.default}/${this.uid$}`, {event: doc.plan}, database.connections.admin))
        ).subscribe(e=>console.log(e))   
    }*/
}