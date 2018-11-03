import { OnInit } from '@angular/core'

import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database } from '@bn8-constants/constants.database'
import { Observable } from 'rxjs'
import { shareReplay, map, filter } from 'rxjs/operators'

export class TagsDatabase implements OnInit {
    tags$: Observable<any>

    constructor(private db: FirebaseClient) {}

    async ngOnInit() {
        this.tags$ = await this.db.collection$(database.tableNames.tags,ref => ref.where(true),
            database.connections.items).pipe(shareReplay(1))
    }

    item(uid: string) {
        return this.tags$.pipe(
            filter(ticket => ticket.uid === uid),
            map(({uid, name}) => ({uid, name})),
            shareReplay(1)
        )
    }

    fetch() {
        return this.tags$
    }

}

