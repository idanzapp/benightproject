import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database } from '@bn8-constants/constants.database'
import { AuthService } from '@bn8-services/auth.service'
import { Observable } from 'rxjs'
import { shareReplay, map } from 'rxjs/operators'

export class EmployeeDatabase {
    private employee$: Observable<any>
    private uid$

    constructor(private fc: FirebaseClient, private auth: AuthService) {this.preloadData()}

    private async preloadData() {
        this.uid$ = await this.auth.uid()
        this.employee$ = await this.fc.collection$(`${database.tables.adminEmployees}/${this.uid$}/${database.list.employee}`, {db: database.connections.admin})
            .pipe(shareReplay(1))
    }    
    
    fetch() {
        return this.employee$
    }

    get(id:string) {
        return this.employee$.pipe(map(e => e.filter(u => u.id === id)[0]))
    }

    getField(data:any) {
        return this.get(data.id).pipe(map( u => u && u[data.field]))
    }

    remove (eid:string) {
        let check = false
        if (check) 
            this.fc.delete(`${database.tables.adminEmployees}/${this.uid$}/${database.list.employee}/${eid}`,database.connections.admin)            
        return check        
    }

    save(data:any) {
        this.fc.updateAt(`${database.tables.adminEmployees}/${this.uid$}/${database.list.employee}/${data.uid}`, data, database.connections.admin)
        return data.uid
    }

    async add (uid:string) {
        this.save({...this.getDefault(), uid:uid, createdAt: new Date().toISOString()})
        return uid
    }

    private getDefault() {
        return defaultEmployee
    }
}

const defaultEmployee = {
    role:'employee',
    description: 'do things'
}

