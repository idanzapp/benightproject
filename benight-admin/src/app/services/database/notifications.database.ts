import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { AuthService } from '@bn8-services/auth.service'
import { database } from '@bn8-constants/constants.database'
import { Observable } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators'

export class NotificationsDatabase {
    
    private sentNotifications$: Observable<any>
    private notifications$: Observable<any> 
    private uid$

    constructor(private fc: FirebaseClient, private auth: AuthService) {this.preloadData()}

    private async preloadData() {
        this.uid$ = await this.auth.uid()
        this.notifications$ = await this.fc.collection$(`${database.tables.adminNotifications}/${this.uid$}/${database.list.notification}`, {db: database.connections.login})
            .pipe(shareReplay(1))
        this.sentNotifications$ = await this.fc.collection$(`${database.tables.sentNotifications}/${this.uid$}/${database.list.notification}`, {db: database.connections.login})
            .pipe(shareReplay(1))
    }
    
    fetch() {
        return this.notifications$
    }

    get(id:string) {
        return this.notifications$.pipe(map(e => e.filter(u => u.id === id)[0]))
    }

    getField(data:any) {
        if (data.field === 'sent')
            return this.sentNotifications$
        return this.get(data.id).pipe(map( u => u && u[data.field]))
    }

    remove (eid:string) {
        this.fc.delete(`${database.tables.adminNotifications}/${this.uid$}/${database.list.notification}/${eid}`,database.connections.login)
    }

    erase(data:any) {
        this.fc.delete(`${database.tables.sentNotifications}/${this.uid$}/${database.list.notification}/${data.uid}`,database.connections.login)
        switch (data.type) {
            case 'user':
                this.fc.delete(`${database.tables.userNotifications}/${data.eid}/${database.list.notification}/${data.uid}`, database.connections.login)
                break
            case 'admin':
                this.fc.delete(`${database.tables.adminNotifications}/${data.eid}/${database.list.notification}/${data.uid}`, database.connections.login)
                break
            case 'employee':
                this.fc.delete(`${database.tables.employeeNotifications}/${data.eid}/${database.list.notification}/${data.uid}`, database.connections.login)
                break
        }
    
    }

    add(data:any) {        
        let uid = this.fc.createId(database.connections.admin)
        data.uid = uid
        data.from = this.uid$
        this.fc.updateAt(`${database.tables.sentNotifications}/${this.uid$}/${database.list.notification}/${uid}`, data, database.connections.login)
        switch (data.type) {
            case 'user':
                this.fc.updateAt(`${database.tables.userNotifications}/${data.eid}/${database.list.notification}/${data.uid}`, data, database.connections.login)
                break
            case 'admin':
                this.fc.updateAt(`${database.tables.adminNotifications}/${data.eid}/${database.list.notification}/${data.uid}`, data, database.connections.login)
                break
            case 'employee':
                this.fc.updateAt(`${database.tables.employeeNotifications}/${data.eid}/${database.list.notification}/${data.uid}`, data, database.connections.login)
                break
        }                 
        return data.uid
    }
}