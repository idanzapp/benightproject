import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database } from '@bn8-constants/constants.database'
import { Observable, of } from 'rxjs'
import { shareReplay } from 'rxjs/operators'

export class ListsDatabase {
    
    private lists$:any = {default: of(null)}

    constructor(private fc: FirebaseClient) {}

    get(id:string) {
        if (!this.lists$[id])
            this.getProperty(id)
        return this.lists$[id] as Observable<any>
    }

    private async getProperty(id:string) {
        this.lists$[id] = await this.fc.doc$(`${database.tables.lists}/${id}`, database.connections.admin)
        .pipe(shareReplay(1))
    }

    remove (data:any) {
        let check = false
        if (check)
            this.fc.delete(`${database.tables.lists}/${data.uid}/${database.list.list}/${data.eid}`,database.connections.admin)
        return check
    }

    save(data:any) {
        this.fc.updateAt(`${database.tables.lists}/${data.uid}/${database.list.list}/${data.eid}`, data, database.connections.admin)
        return data.uid
    }
}