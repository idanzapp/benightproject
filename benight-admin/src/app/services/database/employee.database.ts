import { OnInit } from '@angular/core'

import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database, tables as tb } from '@bn8-interfaces/interfaces.database'
import { AuthService } from '@bn8-services/auth.service'
import { Observable } from 'rxjs'
import { shareReplay } from 'rxjs/operators'

export class EmployeeDatabase implements OnInit {
    employee$: Observable<any>

    constructor(private db: FirebaseClient, private auth: AuthService) {}

    async ngOnInit() {
        let user = await this.auth.uid()
        this.employee$ = await this.db.leftJoin(tb.TB_OWNER_EMPLOYEE,tb.TB_EMPLOYEE,tb.OWNER_ID_FIELD,tb.ID_FIELD, user ? user : 0, database.DB_CON_ADMIN,database.DB_CON_ADMIN).pipe(shareReplay(1))
    }

    fetch() {
        return this.employee$ 
    }

}

