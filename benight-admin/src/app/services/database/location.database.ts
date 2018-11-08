import { OnInit } from '@angular/core'

import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database} from '@bn8-constants/constants.database'
import { AuthService } from '@bn8-services/auth.service'
import { Observable, of } from 'rxjs'
import { shareReplay, map , filter, reduce, share, switchMap } from 'rxjs/operators'

export class LocationDatabase implements OnInit {

    private clubs$: Observable<any>
    //Fields -> gallery, tags, requirements, employees
    private fields = {
        uid$: of(null),
        events$: of(null),
        plans$: of(null),
        address$: of(null),
    }

    constructor(private fc: FirebaseClient, private auth: AuthService) {}

    async ngOnInit() {
        this.fields.uid$ = await this.auth.uid()
        
        let uids = await this.auth.locations().pipe(
            reduce( (acc,value) => `${acc} | ${value}` )
        )
        
        this.clubs$ = await this.fc.collection$(database.tableNames.locations,
            ref => ref.where(database.fields.internalId, database.operations.equal, uids),
            database.connections.admin).pipe(
            shareReplay(1)
        )

        this.fields.events$ = this.clubs$.pipe(
            map(u => u && u[database.listFields.eventList]),
            shareReplay(1)
        )

        this.fields.plans$ = this.clubs$.pipe(
            map(u => u && u[database.listFields.planList]),
            shareReplay(1)
        )

        this.fields.address$ = this.clubs$.pipe(
            map(u => u && u[database.listFields.locationList]),
            reduce((acc,value) => `${acc} | ${value}`),
            /*switchMap((list) => {
                return this.db.collection$(database.tableNames.markers,
                    ref => ref.where(database.fields.internalId, database.operations.equal, uids),
                    database.connections.markers)
            }),*/
            shareReplay(1)
        )
    }

    fetch() {
        return this.clubs$ 
    }

    getField(data:any) {
        if (data.field in this.fields) {
            return this.fields[data.field]
        } else         
            return this.get(data.id).pipe(
                map( u => u && u[data.field]),
                shareReplay(1)
            )
    }

    get(id:string) {
        return this.clubs$.pipe(
            filter( u => u.uid === id),
            shareReplay(1)
            )
    }

    remove (eid:string) {
        this.fc.delete(`${database.tableNames.locations}/${eid}`,database.connections.admin)    
        this.fc.delete(`${database.tableNames.admins}/${this.fields.uid$}/${database.listFields.locationList}/${eid}`)    
    }

    save(data:any) {
        this.fc.updateAt(`${database.tableNames.locations}/${data.uid}`, data)
        return data.uid
    }

    add (data?:any) {
        let uid = this.fc.createId(database.connections.admin)
        data ? data : this.getDefault()
        this.save({...data, eid:uid, createdAt: new Date()})
        return uid
    }

    private getDefault() {
        let defaultLocation = {}
        return defaultLocation
    }    
}