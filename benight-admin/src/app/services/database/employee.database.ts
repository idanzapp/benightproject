import { OnInit } from '@angular/core'

import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database } from '@bn8-constants/constants.database'
import { AuthService } from '@bn8-services/auth.service'
import { Observable } from 'rxjs'
import { shareReplay, reduce, filter, map } from 'rxjs/operators'

export class EmployeeDatabase implements OnInit {
    private employee$: Observable<any>
    private uid$: Observable<any>

    constructor(private fc: FirebaseClient, private auth: AuthService) { }

    async ngOnInit() {
        this.uid$ = await this.auth.uid()

        let uids = await this.auth.employees().pipe(
            reduce((acc, value) => `${acc} || ${value}`)
        )

        this.employee$ = await this.fc.collection$(database.tableNames.employees,
            ref => ref.where(database.fields.internalId, database.operations.equal, uids),
            database.connections.admin).pipe(
                shareReplay(1)
            )
    }
    
    fetch() {
        return this.employee$
    }

    get(id:string) {
        return this.employee$.pipe(
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
        this.fc.delete(`${database.tableNames.employees}/${eid}`,database.connections.admin)
        this.fc.delete(`${database.tableNames.admins}/${this.uid$}/${database.listFields.employeeList}/${eid}`)    
    }

    save(data:any) {
        this.fc.updateAt(`${database.tableNames.employees}/${data.uid}`, data)
        return data.uid
    }

    add (data?:any) {
        let uid = this.fc.createId(database.connections.admin)
        data ? data : this.getDefault()
        this.save({...data, eid:uid, createdAt: new Date()})
        return uid
    }

    private getDefault() {
        let defaultEmployee = {}
        return defaultEmployee
    }
}

