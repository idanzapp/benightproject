import { OnInit } from '@angular/core'

import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database } from '@bn8-constants/constants.database'
import { Observable } from 'rxjs'
import { shareReplay, filter, map  } from 'rxjs/operators'

export class RequirementsDatabase implements OnInit {
    requirements$: Observable<any>

    constructor(private db: FirebaseClient) {}

    async ngOnInit() {

        this.requirements$ = await this.db.collection$(database.tableNames.requirements,ref => ref.where(true),
            database.connections.items).pipe(
                shareReplay(1)
            )
    }


    item(uid: string) {
        return this.requirements$.pipe(
            filter(ticket => ticket.uid === uid),
            map(({uid, name}) => ({uid, name})),
            shareReplay(1)
        )
    }

    fetch() {
        return this.requirements$
    }

}

