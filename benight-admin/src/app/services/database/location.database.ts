import { OnDestroy } from '@angular/core'
import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database} from '@bn8-constants/constants.database'
import { AuthService } from '@bn8-services/auth.service'
import { Observable, of, BehaviorSubject, Subscription } from 'rxjs'
import { switchMap, map, shareReplay, tap } from 'rxjs/operators'
import * as firebase from 'firebase/app'
export class LocationDatabase implements OnDestroy {

    private clubs$: Observable<any> = of(null)
    private encondedData$: Subscription
    private subject$: BehaviorSubject<any> = new BehaviorSubject(null)
    private uid$

    private fields = {
        gallery$: of(null),
        events$: of(null),
        plans$: of(null),
    } 

    constructor(private fc: FirebaseClient, private auth: AuthService) {this.preloadData()}

    private async preloadData() {
        this.uid$ = await this.auth.uid()
        this.clubs$ = await this.fc.collection$(`${database.tables.locations}/${this.uid$}/${database.list.location}`, {db: database.connections.admin})
            .pipe(shareReplay(1))
        this.fields.gallery$ = await this.fc.collection$(`${database.tables.locationGallery}/${this.uid$}/${database.list.location}`, {db: database.connections.admin})
            .pipe(shareReplay(1))
        this.fields.events$ = await this.fc.collection$(`${database.tables.locationEvents}/${this.uid$}/${database.list.location}`, {db: database.connections.admin})
            .pipe(shareReplay(1))
        this.fields.plans$ = await this.fc.collection$(`${database.tables.locationPlans}/${this.uid$}/${database.list.location}`, {db: database.connections.admin})
            .pipe(shareReplay(1))            
        this.encondedData$ = this.clubs$.pipe(            
            tap(e =>  this.subject$.next((e as Array<any>)
            .map( e => {   
                return {
                    title: e.displayName,
                    subtitle: e.address,
                    text: e.description,
                    textAvatar: false,
                    avatar: 'assets/img/avatar.png'
                }                                    
            })))).subscribe()
    }
    
    fetch() {
        return this.clubs$
    }
    
    fetch2() {
        return this.subject$
    }

    ngOnDestroy() {
        this.encondedData$.unsubscribe()
    }

    get(id: string) {
        return this.clubs$.pipe(map(e => e.filter(u => u.id === id)[0]))
    }

    getField(data:any) {
        if(this.fields.hasOwnProperty(data.field))
            return this.fields[data.field].pipe(map(e => (e as Array<any>).filter(u => u.id === data.id)[0]))
        return this.get(data.id).pipe(map( u => u && u[data.field]))
    }

    async remove (eid:string) {
        let check = await this.checkRemove(eid)
        if (check)
            this.fc.delete(`${database.tables.locations}/${this.uid$}/${database.list.location}/${eid}`,database.connections.admin)
        return check    
    }

    save(data:any) {
        if(this.fields.hasOwnProperty(data.field)) {
            switch (data.field) {
                case 'gallery$':
                    delete data.field 
                    this.fc.updateAt(`${database.tables.locationGallery}/${this.uid$}/${database.list.location}/${data.eid}/${database.list.gallery}/${data.uid}`, data, database.connections.admin)
                    break
                case 'events$': 
                    delete data.field
                    this.fc.updateAt(`${database.tables.locationEvents}/${this.uid$}/${database.list.location}/${data.eid}/${database.list.event}/${data.uid}`, data, database.connections.admin)
                    break
                case 'plans$': 
                    delete data.field
                    this.fc.updateAt(`${database.tables.locationPlans}/${this.uid$}/${database.list.location}/${data.eid}/${database.list.plan}/${data.uid}`, data, database.connections.admin)
                    break
            }
        } else {            
            delete data.field
            this.fc.updateAt(`${database.tables.locations}/${this.uid$}/${database.list.location}/${data.uid}`, data, database.connections.admin)
        }    
        return data.uid
    }

    async add (data?:any) {
        let uid = this.fc.createId(database.connections.admin)
        let item
        if (data)  
            item = data
        else 
            item = this.getDefault()
        this.save({...item, uid:uid, createdAt: new Date().toISOString()})
        return uid
    }
    
    private checkRemove(id) {
        //tiene eventos o planes activos
        let hasPlans:Promise<boolean>, hasEvents:Promise<boolean>
        hasEvents = this.getField({id: id,field: 'events$'}).pipe(
            map(e=> (e as Array<any>).length===0 ? true:false)).toPromise() 
        hasPlans = this.getField({id: id,field: 'plans$'}).pipe(
            map(e=> (e as Array<any>).length===0 ? true:false)).toPromise()                              
        return hasPlans && hasEvents
    }

    private getDefault() {
        return {...defaultLocation, nextDate: new Date().toISOString()}
    }
}

const defaultLocation = {
    description: "Lorem ipsum dolor sit amet",
    headerPhotoURL: 'assets/img/photo42.jpg',
    listPhotoURL: 'assets/img/photo3.jpg',
    name: 'prueba',
    numPhotosGallery: 0,
    address: 'victor jara, 31, Zaragoza',
    gaugin: -1,
    point: {
        geohash: 'ezrmhcwneec8',
        geopoint: new firebase.firestore.GeoPoint(41.669532, -0.837555),
        info: {}
    }    
}