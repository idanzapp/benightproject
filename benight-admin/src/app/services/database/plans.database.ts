import { OnInit } from '@angular/core'

import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database } from '@bn8-constants/constants.database'
import { AuthService } from '@bn8-services/auth.service'
import { Observable } from 'rxjs'
import { shareReplay, reduce, filter, map } from 'rxjs/operators'

export class PlansDatabase implements OnInit {
    plans$: Observable<any>
    
    constructor(private db: FirebaseClient, private auth: AuthService) {}

    async ngOnInit() {
        
        let uids = await this.auth.plans().pipe(
            reduce((acc, value) => `${acc} || ${value}`)
        )

        this.plans$ = await this.db.collection$(database.tableNames.plans,
            ref => ref.where(database.fields.internalId, database.operations.equal, uids),
            database.connections.items).pipe(
                shareReplay(1)
            )
    }

    item(uid: string) {
        return this.plans$.pipe(
            filter(plan => plan.uid === uid),
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
        return this.plans$
    }

    addPlan(data: Event) {
        this.db.createAt(database.tableNames.plans, data, database.connections.items)
    }

    deletePlan(uid: string) {
        this.db.delete(`${database.tableNames.plans}/${uid}`, database.connections.items)
    }

}

