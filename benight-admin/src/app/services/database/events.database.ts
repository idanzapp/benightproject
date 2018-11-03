import { OnInit } from '@angular/core'

import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { AuthService } from '@bn8-services/auth.service'
import { database } from '@bn8-constants/constants.database'
import { Observable } from 'rxjs'
import { shareReplay, reduce, filter, map } from 'rxjs/operators'
import { Event } from '@bn8-core/interfaces/interfaces.database/interfaces.event'

export class EventsDatabase implements OnInit {
    events$: Observable<any> 

    constructor(private db: FirebaseClient, private auth: AuthService) {}

    async ngOnInit() {
        
        let uids = await this.auth.events().pipe(
            reduce((acc, value) => `${acc} || ${value}`)
        )

        this.events$ = await this.db.collection$(database.tableNames.events,
            ref => ref.where(database.fields.internalId, database.operations.equal, uids),
            database.connections.items).pipe(
                shareReplay(1)
            )
    }

    item(uid: string) {
        return this.events$.pipe(
            filter(events => events.uid === uid),
            map(({
                uid,
                isPrivate,
                createdAt,
                updatedAt,
                expiresAt,
                relatedTo,
                activateCountdown,
                name,
                description,
                enableEvent,
                enableList,
                eventPhotoURL,
                headerPhotoURL,
                date,
                nextDate,
                finalDate,
                chat,
                price,
                interval,
                listGaugin,
                listFlow,
                userFlow,
                totalUserFlow }) => 
                ({
                    uid,
                    isPrivate,
                    createdAt,
                    updatedAt,
                    expiresAt,
                    relatedTo,
                    activateCountdown,
                    name,
                    description,
                    enableEvent,
                    enableList,
                    eventPhotoURL,
                    headerPhotoURL,
                    date,
                    nextDate,
                    finalDate,
                    chat,
                    price,
                    interval,
                    listGaugin,
                    listFlow,
                    userFlow,
                    totalUserFlow })),
            shareReplay(1)
        )
    }

    fetch() {
        return this.events$
    }

    create(id: string) {
        console.log('holi')
        this.db.updateAt(`${database.tableNames.events}/${id}`,{uid:id, createdAt: new Date(), ...defaultEvent},database.connections.admin)
        //this.db.createAt(database.tableNames.events, data, database.connections.items)
    }

    delete(uid: string) {
        this.db.delete(`${database.tableNames.events}/${uid}`, database.connections.items)
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