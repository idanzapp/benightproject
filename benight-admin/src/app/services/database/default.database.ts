import { OnInit } from '@angular/core'

import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database } from '@bn8-constants/constants.database'
import { AuthService } from '@bn8-services/auth.service'
import { Observable } from 'rxjs'
import { shareReplay } from 'rxjs/operators'

export class DefaultDatabase implements OnInit {
    default$: Observable<any>

    constructor(private db: FirebaseClient, private auth: AuthService) {}

    async ngOnInit() {
        this.default$ = await this.db.collection$(database.tables.users.relations.default.name, ref => ref == this.auth.uid(), database.connections.events).pipe(shareReplay(1))
    }

    fetch() {
        return this.default$ 
    }

}