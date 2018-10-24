import { database } from '@bn8-interfaces/interfaces.database';
import { OnInit } from '@angular/core'

import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { AuthService } from '@bn8-services/auth.service'
import { Observable } from 'rxjs'
import { shareReplay } from 'rxjs/operators'

export class EventsDatabase implements OnInit {
    events$: Observable<any> 

    constructor(private db: FirebaseClient, private auth: AuthService) {}

    async ngOnInit() {
        let user = await this.auth.uid()
        this.events$ = await this.db.leftJoin('owner_events','events','ownerUid','uid', user ? user : 0, 'event','event').pipe(shareReplay(1))
    }

    fetch() {
        return this.events$ 
    }

    async create() {
        //Check if default exists
        //Create id
        let id = this.db.afs().createId()
        //Create default if still not exist default
        let data = {
            activateCountdown: false,
            adress: '',
            assistants: 0,
            description: '',
            duration: '',
            enableEvent: false,
            enableList: false,
            eventPhotoURL: '',
            free: false,
            gaugin: 0,
            headerPhotoURL: '',
            initDate: new Date(),
            maxAge: 0,
            minAge: 0,
            name: '',
            nextDate: new Date(),
            photoURL: '',
            price: 0,
            promoBudget: 0,
            uid: id
        }
        //add new event
        await this.db.updateAt('events', data, database.DB_CON_EVENTS)        
        return id
    }

}

