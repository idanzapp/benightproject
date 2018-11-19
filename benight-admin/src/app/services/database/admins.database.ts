import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database } from '@bn8-core/constants/constants.database'
import { Observable } from 'rxjs'
import { shareReplay} from 'rxjs/operators'

export class AdminsDatabase {
    
    private admins$:Observable<any>


    constructor(private fc: FirebaseClient) {
        this.preloadData()
    }
    
    async preloadData() {
        this.admins$ = await this.fc.collection$(`${database.tableNames.admins}`, {})
        .pipe(shareReplay(1))      
    }

    fetch() {
        return this.admins$
    }
}