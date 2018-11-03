import { OnInit } from '@angular/core'

import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { AuthService } from '@bn8-services/auth.service'
import { database } from '@bn8-constants/constants.database'
import { Observable } from 'rxjs'
import { shareReplay, reduce, filter, map } from 'rxjs/operators'
import { Event } from '@bn8-core/interfaces/interfaces.database/interfaces.event'

export class EventsDatabase implements OnInit {
    events$: Observable<any> 

    constructor(private db: FirebaseClient, private auth: AuthService) {}

    async ngOnInit() {
        
        let uids = await this.auth.events().pipe(
            reduce((acc, value) => `${acc} || ${value}`)
        )

        this.events$ = await this.db.collection$(database.tableNames.events,
            ref => ref.where(database.fields.internalId, database.operations.equal, uids),
            database.connections.items).pipe(
                shareReplay(1)
            )
    }

    item(uid: string) {
        return this.events$.pipe(
            filter(events => events.uid === uid),
            map(({
                uid,
                isPrivate,
                createdAt,
                updatedAt,
                expiresAt,
                relatedTo,
                activateCountdown,
                namename,
                descriptiondescription,
                enableEventenableEvent,
                enableListenableList,
                eventPhotoURL,
                headerPhotoURL,
                date,
                nextDate,
                finalDate,
                chat,
                price,
                interval,
                listGaugin,
                listFlow,
                userFlow,
                totalUserFlow }) => 
                ({
                    uid,
                    isPrivate,
                    createdAt,
                    updatedAt,
                    expiresAt,
                    relatedTo,
                    activateCountdown,
                    namename,
                    descriptiondescription,
                    enableEventenableEvent,
                    enableListenableList,
                    eventPhotoURL,
                    headerPhotoURL,
                    date,
                    nextDate,
                    finalDate,
                    chat,
                    price,
                    interval,
                    listGaugin,
                    listFlow,
                    userFlow,
                    totalUserFlow })),
            shareReplay(1)
        )
    }

    fetch() {
        return this.events$
    }

    addEvents(data: Event) {
        this.db.createAt(database.tableNames.events, data, database.connections.items)
    }

    deleteEvents(uid: string) {
        this.db.delete(`${database.tableNames.events}/${uid}`, database.connections.items)
    }

}

