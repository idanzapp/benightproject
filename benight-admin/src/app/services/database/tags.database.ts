import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database } from '@bn8-constants/constants.database'
import { Observable } from 'rxjs'
import { shareReplay } from 'rxjs/operators'

export class TagsDatabase {
    tags$: Observable<any>

    constructor(private fc: FirebaseClient) {this.preloadData()}

    private async preloadData() {
        this.tags$ = await this.fc.collection$(`${database.tables.tags}`, {db: database.connections.admin})
            .pipe(shareReplay(1))
    }    
    
    fetch() {
        return this.tags$
    }

}

