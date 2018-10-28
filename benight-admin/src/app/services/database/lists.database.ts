import { OnInit } from '@angular/core'

import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database, tables as tb } from '@bn8-constants/constants.database'
import { AuthService } from '@bn8-services/auth.service'
import { Observable } from 'rxjs'
import { shareReplay } from 'rxjs/operators'

export class ListsDatabase implements OnInit {
    list$: Observable<any>

    constructor(private db: FirebaseClient, private auth: AuthService) {}

    async ngOnInit() {
        //this.list$ = await this.db.collection$(tb.TB_CHATROOM, ref => ref.where(tb.ID_FIELD , tb.OP_EQUAL, this.auth.uid()), database.DB_CON_EVENTS).pipe(shareReplay(1))
    }

    fetch() {
        return this.list$ 
    }

}

