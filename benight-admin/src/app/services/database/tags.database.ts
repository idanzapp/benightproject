import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database } from '@bn8-constants/constants.database'
import { Observable } from 'rxjs'
import { shareReplay, map, filter } from 'rxjs/operators'

export class TagsDatabase {
    tags$: Observable<any>

    constructor(private db: FirebaseClient) {}

}

