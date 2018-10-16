import { OnInit } from '@angular/core'

import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { AuthService } from '@bn8-services/auth.service'
import { Observable } from 'rxjs'
import { shareReplay } from 'rxjs/operators'

export class EventsDatabase implements OnInit {
    events$: Observable<any>

    constructor(private db: FirebaseClient, private auth: AuthService) {}

    async ngOnInit() {
        let user = await this.auth.uid()
        this.events$ = await this.db.leftJoin('owner_events','events','ownerUid','uid', user ? user : 0, 'event','event').pipe(shareReplay(1))
    }

    fetch() {
        return this.events$ 
    }

}

