import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database} from '@bn8-constants/constants.database'
import { AuthService } from '@bn8-services/auth.service'
import { Observable, of } from 'rxjs'
import { shareReplay, map } from 'rxjs/operators'

export class LocationDatabase  {

    private clubs$: Observable<any>
    private uid$

    private fields = {
        gallery$: of(null),
        events$: of(null),
        plans$: of(null),
    } 

    constructor(private fc: FirebaseClient, private auth: AuthService) {this.preloadData()}

    private async preloadData() {
        this.uid$ = await this.auth.uid()
        this.clubs$ = await this.fc.collection$(`${database.tableNames.locations}/${this.uid$}/${database.listFields.locationList}`, {db: database.connections.admin})
            .pipe(shareReplay(1))
        this.fields.gallery$ = await this.fc.collection$(`${database.tableNames.locationGallery}/${this.uid$}/${database.listFields.locationList}`, {db: database.connections.admin})
            .pipe(shareReplay(1))
        this.fields.events$ = await this.fc.collection$(`${database.tableNames.locationEvents}/${this.uid$}/${database.listFields.locationList}`, {db: database.connections.admin})
            .pipe(shareReplay(1))
        this.fields.plans$ = await this.fc.collection$(`${database.tableNames.locationPlans}/${this.uid$}/${database.listFields.locationList}`, {db: database.connections.admin})
            .pipe(shareReplay(1))
    }
    
    fetch() {
        return this.clubs$
    }

    get(id: string) {
        return this.clubs$.pipe(map(e => e.filter(u => u.id === id)[0]))
    }

    getField(data:any) {
        if(this.fields.hasOwnProperty(data.field))
            return this.fields[data.field].pipe(map(e => (e as Array<any>).filter(u => u.id === data.id)[0]))
        return this.get(data.id).pipe(map( u => u && u[data.field]))
    }

    remove (eid:string) {
        this.fc.delete(`${database.tableNames.locations}/${this.uid$}/${database.listFields.locationList}/${eid}`,database.connections.admin)
    }

    save(data:any) {
        if(this.fields.hasOwnProperty(data.field)) {
            switch (data.field) {
                case 'gallery$':
                    delete data.field 
                    this.fc.updateAt(`${database.tableNames.locationGallery}/${this.uid$}/${database.listFields.locationList}/${data.eid}/${database.listFields.gallery}/${data.uid}`, data, database.connections.admin)
                    break
                case 'events$': 
                    delete data.field
                    this.fc.updateAt(`${database.tableNames.locationEvents}/${this.uid$}/${database.listFields.locationList}/${data.eid}/${database.listFields.eventList}/${data.uid}`, data, database.connections.admin)
                    break
                case 'plans$': 
                    delete data.field
                    this.fc.updateAt(`${database.tableNames.locationPlans}/${this.uid$}/${database.listFields.locationList}/${data.eid}/${database.listFields.planList}/${data.uid}`, data, database.connections.admin)
                    break
            }
        } else {            
            delete data.field
            this.fc.updateAt(`${database.tableNames.locations}/${this.uid$}/${database.listFields.locationList}/${data.uid}`, data, database.connections.admin)
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
        this.save({...item, uid:uid, createdAt: new Date()})
        return uid
    }

    private getDefault() {
        return {...defaultLocation, nextDate: new Date()}
    }
}

const defaultLocation = {
    description: "Lorem ipsum dolor sit amet",
    headerPhotoURL: 'assets/img/photo42.jpg',
    listPhotoURL: 'assets/img/photo3.jpg',
    name: 'prueba',
    numPhotosGallery: 0    
}