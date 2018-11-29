import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database } from '@bn8-constants/constants.database'
import { Observable, of } from 'rxjs'
import { shareReplay } from 'rxjs/operators'

export class DatesDatabase {
    
    private dates$:any = {default: of(null)}

    constructor(private fc: FirebaseClient) {}

    get(id:string) {
        if (!this.dates$[id])
            this.getProperty(id)
        return this.dates$[id] as Observable<any>
    }

    private async getProperty(id:string) {
        this.dates$[id] = await this.fc.doc$(`${database.tables.dates}/${id}`, database.connections.admin)
        .pipe(shareReplay(1))
    }

    remove (data:any) {
        let check = false
        if (check)
            this.fc.delete(`${database.tables.dates}/${data.uid}/${database.list.date}/${data.eid}`,database.connections.admin)
        return check
    }

    save(data:any) {
        this.fc.updateAt(`${database.tables.dates}/${data.uid}/${database.list.date}/${data.eid}`, data, database.connections.admin)
        return data.uid
    }
}