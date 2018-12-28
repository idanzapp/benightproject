import { OnDestroy } from '@angular/core'
import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database } from '@bn8-constants/constants.database'
import { AuthService } from '@bn8-services/auth.service'
import { Observable, of, BehaviorSubject, Subscription } from 'rxjs'
import { map, shareReplay, tap } from 'rxjs/operators'

export class EmployeeDatabase implements OnDestroy {
    private employee$: Observable<any> = of(null)
    private encondedData$: Subscription
    private subject$: BehaviorSubject<any> = new BehaviorSubject(null)
    private uid$

    constructor(private fc: FirebaseClient, private auth: AuthService) {this.preloadData()}

    private async preloadData() {
        this.uid$ = await this.auth.uid()
        this.employee$ = await this.fc.collection$(`${database.tables.adminEmployees}/${this.uid$}/${database.list.employee}`, {db: database.connections.admin})
            .pipe(shareReplay(1))
        this.encondedData$ = this.employee$.pipe(            
            tap(e =>  this.subject$.next((e as Array<any>)
            .map( e => {   
                return {
                    title: e.displayName,
                    subtitle: e.rol,
                    tags: e.permissionList,
                    avatar: 'assets/img/avatar.png'
                }                                    
            })))).subscribe()
    }    
    
    fetch() {
        return this.employee$
    }

    ngOnDestroy() {
        this.encondedData$.unsubscribe()
    }

    fetch2() {
        return this.subject$
    }

    get(id:string) {
        return this.employee$.pipe(map(e => e.filter(u => u.id === id)[0]))
    }

    getField(data:any) {
        return this.get(data.id).pipe(map( u => u && u[data.field]))
    }

    remove (eid:string) {
        this.fc.delete(`${database.tables.adminEmployees}/${this.uid$}/${database.list.employee}/${eid}`,database.connections.admin)            
        return true        
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

