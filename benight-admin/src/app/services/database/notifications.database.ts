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
        this.notifications$ = await this.fc.collection$(`${database.tableNames.adminNotifications}/${this.uid$}/${database.listFields.notificationList}`, {db: database.connections.login})
            .pipe(shareReplay(1))
        this.sentNotifications$ = await this.fc.collection$(`${database.tableNames.sentNotifications}/${this.uid$}/${database.listFields.notificationList}`, {db: database.connections.login})
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
        this.fc.delete(`${database.tableNames.adminNotifications}/${this.uid$}/${database.listFields.notificationList}/${eid}`,database.connections.login)
    }

    erase(data:any) {
        this.fc.delete(`${database.tableNames.sentNotifications}/${this.uid$}/${database.listFields.notificationList}/${data.uid}`,database.connections.login)
        switch (data.type) {
            case 'user':
                this.fc.delete(`${database.tableNames.userNotifications}/${data.eid}/${database.listFields.notificationList}/${data.uid}`, database.connections.login)
                break
            case 'admin':
                this.fc.delete(`${database.tableNames.adminNotifications}/${data.eid}/${database.listFields.notificationList}/${data.uid}`, database.connections.login)
                break
            case 'employee':
                this.fc.delete(`${database.tableNames.employeeNotifications}/${data.eid}/${database.listFields.notificationList}/${data.uid}`, database.connections.login)
                break
        }
    
    }

    add(data:any) {        
        let uid = this.fc.createId(database.connections.admin)
        data.uid = uid
        data.from = this.uid$
        this.fc.updateAt(`${database.tableNames.sentNotifications}/${this.uid$}/${database.listFields.notificationList}/${uid}`, data, database.connections.login)
        switch (data.type) {
            case 'user':
                this.fc.updateAt(`${database.tableNames.userNotifications}/${data.eid}/${database.listFields.notificationList}/${data.uid}`, data, database.connections.login)
                break
            case 'admin':
                this.fc.updateAt(`${database.tableNames.adminNotifications}/${data.eid}/${database.listFields.notificationList}/${data.uid}`, data, database.connections.login)
                break
            case 'employee':
                this.fc.updateAt(`${database.tableNames.employeeNotifications}/${data.eid}/${database.listFields.notificationList}/${data.uid}`, data, database.connections.login)
                break
        }                 
        return data.uid
    }
}