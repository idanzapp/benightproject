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
        this.employee$ = await this.fc.collection$(`${database.tableNames.employees}/${this.uid$}/${database.listFields.employeeList}`, {db: database.connections.admin})
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
        this.fc.delete(`${database.tableNames.employees}/${this.uid$}/${database.listFields.employeeList}/${eid}`,database.connections.admin)
    }

    save(data:any) {
        this.fc.updateAt(`${database.tableNames.employees}/${this.uid$}/${database.listFields.employeeList}/${data.uid}`, data, database.connections.admin)
        return data.uid
    }

}

