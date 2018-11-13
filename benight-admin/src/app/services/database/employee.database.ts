import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database } from '@bn8-constants/constants.database'
import { AuthService } from '@bn8-services/auth.service'
import { Observable } from 'rxjs'
import { shareReplay, reduce, filter, map } from 'rxjs/operators'

export class EmployeeDatabase {
    private employee$: Observable<any>
    private uid$: Observable<any>

    constructor(private fc: FirebaseClient, private auth: AuthService) { }
}

