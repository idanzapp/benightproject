import { OnInit } from '@angular/core'

import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database } from '@bn8-constants/constants.database'
import { Observable } from 'rxjs'
import { shareReplay, filter, map  } from 'rxjs/operators'

export class RequirementsDatabase implements OnInit {
    private requirements$: Observable<any>

    constructor(private fc: FirebaseClient) {}

    async ngOnInit() {

        this.requirements$ = await this.fc.collection$(database.tableNames.requirements,ref => ref.where(true),
            database.connections.admin).pipe(
                shareReplay(1)
            )
    }
    
    fetch() {
        return this.requirements$
    }

    get(id:string) {
        return this.requirements$.pipe(
            filter( u => u.uid === id),
            shareReplay(1)
            )
    }

}

