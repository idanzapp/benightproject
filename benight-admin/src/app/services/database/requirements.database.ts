import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database } from '@bn8-constants/constants.database'
import { Observable } from 'rxjs'
import { shareReplay, filter, map  } from 'rxjs/operators'

export class RequirementsDatabase  {
    private requirements$: Observable<any>

    constructor(private fc: FirebaseClient) {}

}

