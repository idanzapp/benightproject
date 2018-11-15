import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database } from '@bn8-constants/constants.database'
import { AuthService } from '@bn8-services/auth.service'
import { Observable } from 'rxjs'
import { shareReplay, map } from 'rxjs/operators'

export class TicketDatabase {
    private tickets$: Observable<any>
    private uid$

    constructor(private fc: FirebaseClient, private auth: AuthService) {this.preloadData()}

    private async preloadData() {
        this.uid$ = await this.auth.uid()
        this.tickets$ = await this.fc.collection$(`${database.tableNames.tickets}/${this.uid$}/${database.listFields.ticketList}`, {db: database.connections.admin})
            .pipe(shareReplay(1))
    }
    
    fetch() {
        return this.tickets$
    }

    get(id:string) {
        return this.tickets$.pipe(map(e => e.filter(u => u.id === id)[0]))
    }

    getField(data:any) {
        return this.get(data.id).pipe(map( u => u && u[data.field]))
    }

    remove (eid:string) {
        let check = false
        if (check)
            this.fc.delete(`${database.tableNames.tickets}/${this.uid$}/${database.listFields.ticketList}/${eid}`,database.connections.admin)
        return check            
    }

    save(data:any) {
        this.fc.updateAt(`${database.tableNames.tickets}/${this.uid$}/${database.listFields.ticketList}/${data.uid}`, data, database.connections.admin)
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
            this.fc.updateAt(`${database.tableNames.tickets}/${this.uid$}/${database.listFields.ticketList}/${uid}/${database.listFields.dateList}/${date}`, {}, database.connections.admin)        
        return uid
    }

    private getDefault() {
        let date = new Date().toISOString()
        return {...defaultTicket, date: date, expiresAt: date, openAt: date, nextDate: date, closeAt: date}
    }
}

const defaultTicket = {
    expires:true,
    relativeTo: database.fields.date,
    type: 'ticket',
    gaugin: -1,
    name: 'ticket prueba',
    description: 'ticket description',
    uses:-1,
    price:0
}

