import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database } from '@bn8-constants/constants.database'
import { Observable } from 'rxjs'
import { shareReplay  } from 'rxjs/operators'

export class RequirementsDatabase  {
    private requirements$: Observable<any>

    constructor(private fc: FirebaseClient) {this.preloadData()}

    private async preloadData() {
        this.requirements$ = await this.fc.collection$(`${database.tableNames.requirements}`, {db: database.connections.admin})
            .pipe(shareReplay(1))
    }    
    
    fetch() {
        return this.requirements$
    }

}

