import { OnInit } from '@angular/core'

import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database} from '@bn8-constants/constants.database'
import { AuthService } from '@bn8-services/auth.service'
import { Observable } from 'rxjs'
import { shareReplay, map , filter, reduce } from 'rxjs/operators'
import { Locations } from '@bn8-core/interfaces/interfaces.database/interfaces.location'

export class LocationDatabase implements OnInit {
    private clubs$: Observable<any>

    constructor(private db: FirebaseClient, private auth: AuthService) {}

    async ngOnInit() {
        let uids = await this.auth.locations().pipe(
            reduce( (acc,value) => `${acc} | ${value}` )
        )
        
        this.clubs$ = await this.db.collection$(database.tableNames.locations,
            ref => ref.where(database.fields.internalId, database.operations.equal, uids),
            database.connections.items).pipe(
            shareReplay(1)
        )
    }

    fetch() {
        return this.clubs$ 
    }

    item(uid:string) {        
        return this.clubs$.pipe(
            filter( location => location.uid === uid ),
            map(({
                uid,
                name,
                description,
                nextDate,
                headerPhotoURL,
                listPhotoURL,
                numPhotosGallery,
                maxPhotosGallery,
                address}) => ({uid,name,nextDate,description,headerPhotoURL,listPhotoURL,numPhotosGallery,maxPhotosGallery,address})),
            shareReplay(1)
        )
    }

    events(uid:string) {
        return this.clubs$.pipe(
            filter( location => location.uid === uid  ),
            map(u => u && u.eventList),
            shareReplay(1)
        )
    }

    plans(uid:string) {
        return this.clubs$.pipe(
            filter( location => location.uid === uid  ),
            map(u => u && u.planList),
            shareReplay(1)
        )
    }

    employee(uid:string) {
        return this.clubs$.pipe(
            filter( location => location.uid === uid  ),
            map(u => u && u.employeeList),
            shareReplay(1)
        )
    }

    modifiedDates(uid:string) {
        return this.clubs$.pipe(
            filter( location => location.uid === uid  ),
            map(u => u && u.modifiedDatesList),
            shareReplay(1)
        )
    }

    addresses(uid:string) {
        return  this.clubs$.pipe(
            filter( location => location.uid === uid ),
            map(u => u && u.markersList),
            shareReplay(1)
        )
    }

    transactions(uid:string) {
        return  this.clubs$.pipe(
            filter( location => location.uid === uid ),
            map(u => u && u.transactionList),
            shareReplay(1)
        )
    }

    ClubGallery(uid:string) {
        return  this.clubs$.pipe(
            filter( location => location.uid === uid ),
            map(u => u && u.transactionList),
            shareReplay(1)
        )
    }

    tags(uid:string) {
        return  this.clubs$.pipe(
            filter( location => location.uid === uid ),
            map(u => u && u.tagList),
            shareReplay(1)
        )
    }

    requirements(uid:string) {
        return  this.clubs$.pipe(
            filter( location => location.uid === uid ),
            map(u => u && u.requirementsList),
            shareReplay(1)
        )
    }

    createLocation(data:Locations) {
        this.db.createAt(database.tableNames.locations, data, database.connections.items)
    }

    deleteLocation(uid:string) {        
        this.db.delete(`${database.tableNames.locations}/${uid}`, database.connections.items)
    }    
}