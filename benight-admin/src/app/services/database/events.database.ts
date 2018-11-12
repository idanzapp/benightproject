import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { AuthService } from '@bn8-services/auth.service'
import { database } from '@bn8-constants/constants.database'
import { Observable, combineLatest } from 'rxjs'
import { shareReplay,  filter, map, switchMap } from 'rxjs/operators'

export class EventsDatabase {
    private events$: Observable<any> 
    private uid$

    constructor(private fc: FirebaseClient, private auth: AuthService) {
        this.auth.uid().subscribe(e => this.uid$ = e)

        this.events$ = this.auth.events().pipe(
            switchMap((ids) => {
                let reads$ = []
                for (let id of ids)
                    reads$.push(this.fc.doc$(`${database.tableNames.events}/${id}`, database.connections.admin))
                return combineLatest(reads$)}),
                shareReplay(1))
    }
    
    fetch() {
        return this.events$
    }

    get(id:string) {
        return this.events$.pipe(
            filter( u => u.uid === id),
            shareReplay(1)
            )
    }

    getField(data:any) {
        return this.get(data.id).pipe(
            map( u => u && u[data.field]),
            shareReplay(1)
        )
    }

    remove (eid:string) {
        this.fc.delete(`${database.tableNames.events}/${eid}`,database.connections.admin)
        this.fc.delete(`${database.tableNames.admins}/${this.uid$}/${database.listFields.eventList}/${eid}`)    
    }

    save(data:any) {
        this.fc.updateAt(`${database.tableNames.events}/${data.uid}`, data, database.connections.admin)
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
        let addId
        this.auth.events().subscribe(e => {
            e.push(uid)
            addId = {eventList: e}
        }) 
        this.fc.updateAt(`${database.tableNames.admins}/${this.uid$}`, addId)
        return uid
    }

    private getDefault() {
        return {...defaultEvent}
    }
}

const defaultEvent = {
    isPrivate: false,
    activateCountdown: false,
    name: 'prueba',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur quam pharetra tortor eleifend, sed dignissim arcu lobortis. Cras luctus nisi in nibh congue, non tristique felis posuere. Morbi id enim arcu. Cras laoreet sapien ut congue efficitur. Proin dignissim turpis lacus, tempus tristique neque tristique eget. Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas non est nibh. Aliquam ac finibus risus, vel pretium enim. Morbi a ullamcorper lorem. Quisque lobortis, ligula vel tempor commodo, lorem est efficitur enim, egestas blandit magna ligula ac magna. Integer pulvinar aliquet ultrices. Aenean fringilla venenatis vehicula. Donec tristique non felis id varius. Nulla dictum velit ac ornare fringilla. Suspendisse est lorem, ultricies sit amet interdum eget, finibus vel leo. Vestibulum pulvinar lorem dolor, sed interdum dui efficitur ut. Aenean nec odio ultricies, porta augue a, ornare ipsum. Vestibulum quis metus semper, posuere magna molestie, dignissim neque. Vestibulum magna odio, cursus vel commodo accumsan, efficitur sit amet justo. Etiam tempus nisi eget urna tempus, non laoreet mi euismod. Aenean faucibus, nisi et luctus luctus, lectus dolor convallis metus, in tincidunt magna turpis non tortor",
    enableEvent: false,
    enableList: false,
    eventPhotoURL: 'assets/img/photo3.jpg',
    headerPhotoURL: 'assets/img/photo42.jpg',
    date: new Date(),
    nextDate:new Date(),
    finalDate:new Date(),
    chat: 0,
    price:10,
    interval: 'daily',
    listGaugin: 0,
    listFlow: 0,
    userFlow: 0,
    totalUserFlow: 0
}