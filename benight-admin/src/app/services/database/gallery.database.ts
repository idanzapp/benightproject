import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { AuthService } from '@bn8-services/auth.service'
import { database } from '@bn8-constants/constants.database'
import { Observable } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators'

export class GalleryDatabase {
    
    private photos$: Observable<any> 
    private uid$

    constructor(private fc: FirebaseClient, private auth: AuthService) {this.preloadData()}

    private async preloadData() {
        this.uid$ = await this.auth.uid()
        this.photos$ = await this.fc.collection$(`${database.tables.gallery}/${this.uid$}/${database.list.gallery}`, {db: database.connections.admin})
            .pipe(shareReplay(1))
    }
    
    fetch() {
        return this.photos$
    }

    get(id:string) {
        return this.photos$.pipe(map(e => e.filter(u => u.id === id)[0]))
    }

    remove (eid:string) {
        let check = false
        if (check)
            this.fc.delete(`${database.tables.gallery}/${this.uid$}/${database.list.gallery}/${eid}`,database.connections.admin)
        return check
    }

    save(data:any) {
        this.fc.updateAt(`${database.tables.gallery}/${this.uid$}/${database.list.gallery}/${data.uid}`, data, database.connections.admin)
        return data.uid
    }
}