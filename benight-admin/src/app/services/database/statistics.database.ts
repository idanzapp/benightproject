import { OnInit } from '@angular/core'

import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database } from '@bn8-database/interfaces'
import { AuthService } from '@bn8-services/auth.service'
import { Observable } from 'rxjs'
import { shareReplay } from 'rxjs/operators'

export class StatisticsDatabase implements OnInit {
    statistics$: Observable<any>

    constructor(private db: FirebaseClient, private auth: AuthService) {}

    async ngOnInit() {
        this.statistics$ = await this.db.collection$(`events`, ref => ref == this.auth.uid(), database.DB_CON_EVENTS).pipe(shareReplay(1))
    }

    fetch() {
        return this.statistics$ 
    }

}
