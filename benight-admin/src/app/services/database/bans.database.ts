import { OnInit } from '@angular/core'

import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database } from '@bn8-constants/constants.database'
import { AuthService } from '@bn8-services/auth.service'
import { Observable } from 'rxjs'
import { shareReplay, filter, map } from 'rxjs/operators'

export class BansDatabase implements OnInit { 

    private bans$: Observable<any>
    private uid: Observable<any>

    constructor(private fc: FirebaseClient, private auth: AuthService) {}
    async ngOnInit() {
        this.uid = await this.auth.uid()
        this.bans$ = await this.fc.collection$(database.tableNames.bans, 
            ref => ref.where(database.fields.internalId, database.operations.equal, this.uid),
             database.connections.chat)
            .pipe(shareReplay(1)) 
    }

    fetch() {
        return this.bans$
    }

    get(id:string) {
        return this.bans$.pipe(
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
    /*create() {        
        return this.fc.updateAt(`${database.tableNames.bans}/${this.uid}`,{uid:this.uid, createdAt: new Date()})
    }*/

    delete() {
        this.fc.delete(`${database.tableNames.bans}/${this.uid}`)
    }

    remove (eid:string) {
        this.fc.delete(`${database.tableNames.bans}/${this.uid}/${database.listFields.banList}/${eid}`)
    }

    save(data:any) {
        return this.fc.updateAt(`${database.tableNames.bans}/${this.uid}/${database.listFields.banList}/${data.eid}`, data)
    }

    add (data:any) {
        let uid = this.fc.createId(database.connections.admin)
        return this.save({...data,eid:uid, createdAt: new Date()})
    }

}
