import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database, tables as tb } from '@bn8-constants/constants.database' 
import { Observable } from 'rxjs'
import { shareReplay } from 'rxjs/operators'

export class DateDatabase{
    event_date$: Observable<any>
    plans_date$: Observable<any>
    ticket_date$: Observable<any>

    private accessed:boolean[] = [false,false,false]
    constructor(private db: FirebaseClient) {}

    async fetch(date:string,id:string) {
        switch (date) {
            case tb.TB_DATE_PLANS:
                if (!this.accessed[1]) {
                    this.plans_date$ = await this.db.collection$(tb.TB_DATE_PLANS, ref => ref.where(tb.DATE_ID_FIELD , tb.OP_EQUAL, id), database.DB_CON_EVENTS).pipe(shareReplay(1))   
                    this.accessed[1] = true
                }
                return this.plans_date$    
            case tb.TB_DATE_TICKET:
                if (!this.accessed[2]) {
                    this.ticket_date$ = await this.db.collection$(tb.TB_DATE_TICKET, ref => ref.where(tb.DATE_ID_FIELD , tb.OP_EQUAL, id), database.DB_CON_EVENTS).pipe(shareReplay(1))
                    this.accessed[2] = true
                }   
                return this.ticket_date$
            default:
                if (!this.accessed[0]) {
                    this.event_date$ = await this.db.collection$(tb.TB_DATE_EVENT, ref => ref.where(tb.DATE_ID_FIELD , tb.OP_EQUAL, id), database.DB_CON_EVENTS).pipe(shareReplay(1))
                    this.accessed[0] = true
                }   
                return this.event_date$
        }
    }

}

