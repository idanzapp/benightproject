import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database } from '@bn8-constants/constants.database'
import { AuthService } from '@bn8-services/auth.service'
import { Observable } from 'rxjs'
import { shareReplay, reduce, map, filter } from 'rxjs/operators'

export class TicketDatabase {
    private tickets$: Observable<any>
    private uid$:Observable<any>

    constructor(private fc: FirebaseClient, private auth: AuthService) {}

    private getDefault() {
        let  defaultTicket = {}
        return defaultTicket
    }

}

