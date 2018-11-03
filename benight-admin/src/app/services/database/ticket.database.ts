import { OnInit } from '@angular/core'

import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database } from '@bn8-constants/constants.database'
import { AuthService } from '@bn8-services/auth.service'
import { Observable } from 'rxjs'
import { shareReplay, reduce, map, filter } from 'rxjs/operators'
import { Ticket } from '@bn8-core/interfaces/interfaces.database/interfaces.ticket'

export class TicketDatabase implements OnInit {
    ticket$: Observable<any>

    constructor(private db: FirebaseClient, private auth: AuthService) { }

    async ngOnInit() {
        let uids = await this.auth.tickets().pipe(
            reduce((acc, value) => `${acc} || ${value}`)
        )

        this.ticket$ = await this.db.collection$(database.tableNames.tickets,
            ref => ref.where(database.fields.internalId, database.operations.equal, uids),
            database.connections.tickets).pipe(
                shareReplay(1)
            )
    }


    item(uid: string) {
        return this.ticket$.pipe(
            filter(ticket => ticket.uid === uid),
            map(({uid, name, description, nextDate, headerPhotoURL, listPhotoURL, numPhotosGallery, maxPhotosGallery, address }) => 
            ({ uid, name, nextDate, description, headerPhotoURL, listPhotoURL, numPhotosGallery, maxPhotosGallery, address })
            ),
            shareReplay(1)
        )
    }

    fetch() {
        return this.ticket$
    }

    addTicket(data: Ticket) {
        this.db.createAt(database.tableNames.tickets, data, database.connections.admin)
    }

    deleteTicket(uid: string) {
        this.db.delete(`${database.tableNames.tickets}/${uid}`, database.connections.items)
    }

}

