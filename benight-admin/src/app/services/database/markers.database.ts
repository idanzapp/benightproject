import { OnInit } from '@angular/core'

import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database} from '@bn8-constants/constants.database'
import { AuthService } from '@bn8-services/auth.service'
import { Observable, of } from 'rxjs'
import { shareReplay, map , filter, reduce, share, switchMap } from 'rxjs/operators'

export class MarkersDatabase implements OnInit {

    private clubs$: Observable<any>
    //Fields -> gallery, tags, requirements, employees
    private fields = {
        uid$: of(null),
        events$: of(null),
        plans$: of(null),
        address$: of(null),
    }

    constructor(private fc: FirebaseClient, private auth: AuthService) {}

    ngOnInit() {}
}