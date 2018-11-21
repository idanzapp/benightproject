import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database } from '@bn8-core/constants/constants.database'
import { Observable, of } from 'rxjs'
import { shareReplay } from 'rxjs/operators'

export class EmployeesDatabase {
    
    private employees$:Observable<any> = of(null)

    constructor(private fc: FirebaseClient) {
        this.preloadData()}
    
    async preloadData() {
        this.employees$ = await this.fc.collection$(`${database.tables.employees}`,{})
        .pipe(shareReplay(1))
    }

    fetch() {
        return this.employees$
    }
}